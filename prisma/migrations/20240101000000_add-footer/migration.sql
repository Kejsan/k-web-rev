-- CreateTable
CREATE TABLE "Footer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "copyright" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "twitter" TEXT,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
