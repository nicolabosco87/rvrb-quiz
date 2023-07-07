import { RvrbBotConnector } from "./lib/RvrbBotConnector";
import { Quiz } from "./lib/quiz";
import { updateUserInfos } from "./lib/utils";

const quiz = new Quiz();

const rvrbBotConnector = new RvrbBotConnector();

rvrbBotConnector.setCustomPushChannelMessage((e) => {
  quiz.handleCommand(e);
});

rvrbBotConnector.setCustomUpdateChannelUsers((e) => {
  updateUserInfos(e);
});

rvrbBotConnector.setCustomPlayChannelTrack(() => {
  quiz.askQuestion();
});

rvrbBotConnector.connect();

quiz.setSendMessage((message: string) => {
  rvrbBotConnector.sendMessage(message);
});
