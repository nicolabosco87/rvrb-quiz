export type Message = {
  jsonrpc: string;
  method: string;
  params: {
    deleted: boolean;
    expandable: boolean;
    syncTime: number;
    payload: string;
    userId: string;
    format: string;
    type: string;
    userName: string;
    originaalPayload: string;
  };
};

export type ChannelUsers = {
  jsonrpc: string;
  method: string;
  params: {
    type: string;
    syncTime: number;
    users: (
      | {
          _id: string;
          boofStars: number;
          createdDate: string;
          djImage: string;
          dopes: number;
          image: string;
          lastTouched: string;
          nopes: number;
          rvrbed: boolean;
          stars: number;
          theme: string;
          thumbsDownImage: string;
          thumbsUpImage: string;
          userName: string;
          lastAuthenticated: string;
          displayName: string;
          country: string;
          bio: string;
          nativeNotifications: {
            enablled: boolean;
            enabled?: undefined;
          };
          mobile: boolean;
          siteAdmin?: undefined;
          channelId?: undefined;
          type?: undefined;
        }
      | {
          _id: string;
          image: string;
          djImage: string;
          thumbsUpImage: string;
          thumbsDownImage: string;
          userName: string;
          displayName: string;
          theme: string;
          nativeNotifications: {
            enabled: boolean;
            enablled?: undefined;
          };
          siteAdmin: boolean;
          channelId: string;
          type: string;
          createdDate: string;
          mobile: boolean;
          boofStars?: undefined;
          dopes?: undefined;
          lastTouched?: undefined;
          nopes?: undefined;
          rvrbed?: undefined;
          stars?: undefined;
          lastAuthenticated?: undefined;
          country?: undefined;
          bio?: undefined;
        }
    )[];
    usersInRegion: {
      IT: number;
    };
  };
};

export const DateFilter = {
  game: "game",
  month: "month",
  all: "all",
} as const;
