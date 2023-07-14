import { LABELS } from "../config/labels";
import { Question } from "../models";
import { DateFilter, Message } from "../types";
import { prisma } from "./prisma";
import { replaceInString, buildHtmlTable } from "./utils";
import dayjs from "dayjs";

type SendMessageMethod = (message: string) => void;

export class Quiz {
  private _currentRoundStart?: Date;
  private _active: boolean = false;
  private _sendMessage: SendMessageMethod = () => "";
  private _currentQuestion?: Question;
  private _currentQuestionStartTime?: Date;
  private _answered: boolean = false;
  private _roomId: string = "";

  //   Setters
  setSendMessage = (sendMessage: SendMessageMethod) => {
    this._sendMessage = sendMessage;
  };
  setRoomID = (roomID: string) => (this._roomId = roomID);

  // Getters
  getCurrentAnswer = () => this._currentQuestion?.answer;
  getCurrentQuestion = () => this._currentQuestion?.question;

  //   Public Methods
  handleCommand = (m: Message) => {
    const message = m.params.payload;

    if (message.indexOf("-quiz start") === 0) {
      this._active = true;
      this._sendMessage(LABELS.quizStarted);
      this._currentRoundStart = new Date();
      return Promise.resolve();
    }

    if (message.indexOf("-quiz stop") === 0) {
      this._active = false;
      this._sendMessage(LABELS.quizStopped);
      this._currentRoundStart = undefined;
      return Promise.resolve();
    }

    if (message.indexOf("-quiz score") === 0) {
      const dateFilter = this._getDateFilterArgument(message);
      return this.printGameLeaderboard(dateFilter);
    }

    if (message.indexOf("-quiz") === 0) {
      return this.printHelp();
    }

    // if (message.includes("-quiz score-rvrb")) {
    //   const dateFilter = this._getDateFilterArgument(message);
    //   return this.printGameLeaderboard(dateFilter);
    // }

    if (this._active && this._currentQuestion && !this._answered) {
      return this._checkAnswer(m);
    }

    return Promise.resolve(true);
  };

  _getDateFilterArgument = (command: string): Date | undefined => {
    const parts = command.split(" ").slice(2);

    if (!parts[0]) {
      return this._currentRoundStart;
    }

    switch (parts[0]) {
      case DateFilter.all:
        return undefined;

      case DateFilter.month:
        return dayjs().set("month", 1).toDate();

      default:
        return this._currentRoundStart;
    }
  };

  printHelp = async () => {
    const helpRows = [
      {
        Command: "-quiz start",
        Description: LABELS.infoStart,
      },
      {
        Command: "-quiz stop",
        Description: LABELS.infoStop,
      },
      {
        Command: "-quiz score",
        Description: LABELS.infoScore,
      },
    ];

    this._sendMessage(buildHtmlTable(helpRows));

    return Promise.resolve();
  };

  printGameLeaderboard = async (dateFilter?: Date) =>
    new Promise(async (resolve, reject) => {
      try {
        const scoresQuery = await prisma.correctAnswers.groupBy({
          by: ["userId"],
          take: 5,
          where: {
            createdAt: {
              gte: dateFilter,
            },
          },
          _count: {
            userId: true,
          },
          orderBy: {
            _count: {
              userId: "desc",
            },
          },
        });

        const userIdsToSearch: string[] = [];

        let rows: {
          Position: number;
          User: string;
          Score: number;
        }[] = [];

        scoresQuery.forEach((result, index) => {
          userIdsToSearch.push(result.userId);

          rows.push({
            Position: index + 1,
            User: result.userId,
            Score: result._count.userId,
          });
        });

        const userInfosQuery = await prisma.userInfo.findMany({
          where: {
            id: {
              in: userIdsToSearch,
            },
          },
        });

        rows = rows.map((r) => {
          const userInfo = userInfosQuery.find((u) => u.id === r.User);

          return {
            Position: r.Position,
            User: userInfo?.userName ?? r.User,
            Score: r.Score,
          };
        });

        this._sendMessage(buildHtmlTable(rows));

        resolve(true);
      } catch (e) {
        reject(e);
      }

      resolve(true);
    });

  askQuestion = async () =>
    new Promise(async (resolve, reject) => {
      if (this._active) {
        // Check if previous question hasn't beed answered
        if (this._currentQuestion && !this._answered) {
          this._sendMessage(
            replaceInString(LABELS.noAnswers, {
              answer: this._currentQuestion.answer,
            })
          );
        }

        // Retrieve new question
        const questionsCount = await prisma.question.count();
        const skip = Math.floor(Math.random() * questionsCount);
        const questions = await prisma.question.findMany({
          take: 1,
          skip,
        });

        if (!questions[0]) {
          resolve(true);
        }

        this._currentQuestion = questions[0];
        this._currentQuestionStartTime = new Date();
        this._answered = false;
        this._sendMessage(
          replaceInString(LABELS.question, {
            question: questions[0].question,
          })
        );
        resolve(true);
      }

      resolve(true);
    });

  // Format answer string for comparation
  _formatAnswer = (answer: string) => {
    answer = answer.toLowerCase().trim();

    if (answer.indexOf("the ")) {
      answer = answer.slice(4);
    }

    return answer;
  };

  // Check a message if contains the answer to the current question
  _checkAnswer = async (m: Message) =>
    new Promise(async (resolve, reject) => {
      try {
        if (!this._currentQuestion?.answer) {
          return resolve(true);
        }
        if (this._formatAnswer(m.params.payload) === this._formatAnswer(this._currentQuestion?.answer)) {
          this._answered = true;
          this._sendMessage(
            replaceInString(LABELS.answerGuessed, {
              username: m.params.userName,
            })
          );

          let responseTime = 0;
          if (this._currentQuestionStartTime) {
            responseTime = new Date().getTime() - this._currentQuestionStartTime?.getTime();
          }

          const create = await prisma.correctAnswers.create({
            data: {
              questionId: this._currentQuestion.id,
              userId: m.params.userId,
              responseTime,
              roomId: this._roomId ?? "",
            },
          });
          return resolve(true);
        }

        // No answer found
        return resolve(true);
      } catch (e) {
        console.error(e);
        return reject(e);
      }
    });
}
