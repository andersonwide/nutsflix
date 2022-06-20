-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Register" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genreID" INTEGER NOT NULL,
    "typeID" INTEGER NOT NULL,
    CONSTRAINT "Register_genreID_fkey" FOREIGN KEY ("genreID") REFERENCES "Genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Register_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Register" ("description", "genreID", "id", "name", "typeID", "year") SELECT "description", "genreID", "id", "name", "typeID", "year" FROM "Register";
DROP TABLE "Register";
ALTER TABLE "new_Register" RENAME TO "Register";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
