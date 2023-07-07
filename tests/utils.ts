const USERS = {
  woods: {
    id: "635f66402f9b8fe2ed71ff51",
    userName: "Woods🪵",
  },
  user2: {
    id: "000000111111222222333333",
    userName: "User2",
  },
};

export const buildUserMessage = (message: string, from: keyof typeof USERS) => {
  return {
    jsonrpc: "2.0",
    method: "pushChannelMessage",
    params: {
      deleted: false,
      expandable: false,
      syncTime: 1685051305218,
      payload: message, // "meow",
      userId: USERS[from].id, // "635f66402f9b8fe2ed71ff51",
      format: "text",
      type: "chat",
      userName: USERS[from].userName, // "Woods🪵",
      originaalPayload: message, // "meow"
    },
  };
};

export const delay = (time: number = 500) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(undefined), time);
  });
