-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CorrectAnswers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "questionId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "responseTime" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "CorrectAnswers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CorrectAnswers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CorrectAnswers" ("createdAt", "id", "questionId", "userId") SELECT "createdAt", "id", "questionId", "userId" FROM "CorrectAnswers";
DROP TABLE "CorrectAnswers";
ALTER TABLE "new_CorrectAnswers" RENAME TO "CorrectAnswers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
