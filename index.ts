import { RvrbBotConnector } from "./lib/RvrbBotConnector";
import { Quiz } from "./lib/quiz";
import { updateUserInfos } from "./lib/utils";
import express from "express";
import { v4 } from "uuid";

export const app = express();

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

rvrbBotConnector.setCustomOnReady((channelId) => quiz.setRoomID(channelId));
rvrbBotConnector.connect();

quiz.setSendMessage((message: string) => {
  rvrbBotConnector.sendMessage(message);
});

app.get("/", (req: any, res: any) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Status: RUNNING`);
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
