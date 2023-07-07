import { PrismaClient } from "../models";
import { ChannelUsers } from "../types";

const prisma = new PrismaClient();

export const updateUserInfos = async (channelUsers: ChannelUsers) => {
  const calls: Promise<any>[] = [];

  try {
    channelUsers.params.users.forEach(async (user) => {
      if (user.type !== "bot") {
        calls.push(
          prisma.userInfo.upsert({
            where: {
              id: user._id,
            },
            update: {
              userName: user.displayName,
            },
            create: {
              id: user._id,
              userName: user.displayName,
            },
          })
        );
      }
    });
  } catch (e) {
    console.log(e);
  }

  return Promise.all(calls);
};

const row = (html: string) => `<tr>${html}</tr>`;
const heading = (object: object) =>
  row(Object.keys(object).reduce((html, heading) => html + `<th><strong>${heading}</strong></th>`, ""));
const datarow = (object: object) => row(Object.values(object).reduce((html, value) => html + `<td>${value}</td>`, ""));

export function buildHtmlTable(dataList: object[]) {
  return `<table class="chat-table striped">
            <thead>${heading(dataList[0])}</thead>
            <tbody>${dataList.reduce((html, object) => html + datarow(object), "")}</tbody>
          </table>`;
}
export const replaceInString = (label: string, values?: Record<string, string>) => {
  if (!values) {
    return label;
  }

  Object.entries(values).forEach((v) => {
    label = label.replace(`{{${v[0]}}}`, v[1]);
  });

  return label;
};
