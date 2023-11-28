/*
  Warnings:

  - You are about to drop the column `descricao` on the `Eixo` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Categoria` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Eixo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Eixo" ("id", "nome") SELECT "id", "nome" FROM "Eixo";
DROP TABLE "Eixo";
ALTER TABLE "new_Eixo" RENAME TO "Eixo";
CREATE TABLE "new_Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Categoria" ("id", "nome") SELECT "id", "nome" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
