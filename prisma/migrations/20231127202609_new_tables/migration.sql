/*
  Warnings:

  - You are about to drop the column `categoria` on the `Curso` table. All the data in the column will be lost.
  - You are about to drop the column `eixo` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eixoId` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Eixo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descricao" TEXT NOT NULL,
    "capa" TEXT,
    "categoriaId" INTEGER NOT NULL,
    "eixoId" INTEGER NOT NULL,
    CONSTRAINT "Curso_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Curso_eixoId_fkey" FOREIGN KEY ("eixoId") REFERENCES "Eixo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Curso" ("capa", "dataCriacao", "descricao", "id", "nome") SELECT "capa", "dataCriacao", "descricao", "id", "nome" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
