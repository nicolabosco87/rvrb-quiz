import { CorrectAnswers, PrismaClient, UserInfo } from "../../models";

const prisma = new PrismaClient();

const users: Pick<UserInfo, "id" | "userName">[] = [
  {
    id: "635f66402f9b8fe2ed71ff51",
    userName: "Woods🪵",
  },
  {
    id: "000000111111222222333333",
    userName: "user2",
  },
];

async function seed() {
  for (const user of users) {
    await prisma.userInfo.create({
      data: user,
    });
  }

  const question = await prisma.question.findFirst();

  prisma.correctAnswers.create({
    data: {
      questionId: question?.id ?? 1,
      userId: "000000111111222222333333",
      createdAt: new Date("01/01/1900"),
      roomId: "testRoom",
    },
  });
  prisma.correctAnswers.create({
    data: {
      questionId: question?.id ?? 1,
      userId: "000000111111222222333333",
      createdAt: new Date("01/01/1900"),
      roomId: "testRoom",
    },
  });
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
