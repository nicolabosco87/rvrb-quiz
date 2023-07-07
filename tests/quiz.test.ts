import { beforeEach, expect, jest, test } from "@jest/globals";
import { Quiz } from "../lib/quiz";
import { buildUserMessage, delay } from "./utils";

import { LABELS } from "../config/labels";
import { replaceInString } from "../lib/utils";

const mockedSendMessage = jest.fn((m) => {
  console.log(m);
  return m;
});

let quiz: Quiz = new Quiz();
quiz.setSendMessage(mockedSendMessage);

beforeEach(async () => {
  mockedSendMessage.mockClear();
  delay(100);
});

test("Should show infos", async () => {
  await quiz.handleCommand(buildUserMessage("-quiz", "woods"));
  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toEqual(expect.stringContaining(LABELS.infoStart));
});

test("Should start quiz", async () => {
  await quiz.handleCommand(buildUserMessage("-quiz start", "woods"));
  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toBe(LABELS.quizStarted);
});

test("Should ask questions", async () => {
  await quiz.askQuestion();

  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toBe(
    replaceInString(LABELS.question, {
      question: quiz.getCurrentQuestion() ?? "",
    })
  );
});

test("Should avoid wrong answers/common messages", async () => {
  await quiz.handleCommand(buildUserMessage("meow", "woods"));
  expect(mockedSendMessage.mock.calls).toHaveLength(0);
});

test("Should detect correct answer", async () => {
  let answer = quiz.getCurrentAnswer();
  await quiz.handleCommand(buildUserMessage(answer ?? "", "woods"));
  await quiz.handleCommand(buildUserMessage("meow", "user2"));

  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toBe(
    replaceInString(LABELS.answerGuessed, {
      username: "Woods🪵",
    })
  );
});

test("Should handle more questions", async () => {
  //   Question 2
  await quiz.askQuestion();
  let answer = quiz.getCurrentAnswer();
  await quiz.handleCommand(buildUserMessage("meow", "user2"));
  await quiz.handleCommand(buildUserMessage(answer ?? "", "user2"));
  await quiz.handleCommand(buildUserMessage(answer ?? "", "woods"));

  //   Question 3
  await quiz.askQuestion();
  answer = quiz.getCurrentAnswer();
  await quiz.handleCommand(buildUserMessage(answer ?? "", "woods"));

  expect(mockedSendMessage.mock.calls).toHaveLength(4);
});

test("Should show no winners with the answer", async () => {
  //   Question 4
  await quiz.askQuestion();
  const answer = quiz.getCurrentAnswer() ?? "";
  await quiz.handleCommand(buildUserMessage("Wrong 1", "woods"));
  await quiz.handleCommand(buildUserMessage("Wrong 2", "user2"));

  // Question 5
  await quiz.askQuestion();

  expect(mockedSendMessage.mock.calls).toHaveLength(3);
  expect(mockedSendMessage.mock.results[1].value).toBe(
    replaceInString(LABELS.noAnswers, {
      answer,
    })
  );
});

test("Should print scoreboard", async () => {
  await quiz.handleCommand(buildUserMessage("-quiz score", "woods"));
  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toEqual(expect.stringContaining("<td>Woods🪵</td><td>2</td>"));
  expect(mockedSendMessage.mock.results[0].value).toEqual(expect.stringContaining("<td>user2</td><td>1</td>"));
});

test("Should stop quiz", async () => {
  await quiz.handleCommand(buildUserMessage("-quiz stop", "woods"));
  expect(mockedSendMessage.mock.calls).toHaveLength(1);
  expect(mockedSendMessage.mock.results[0].value).toBe(LABELS.quizStopped);
});
