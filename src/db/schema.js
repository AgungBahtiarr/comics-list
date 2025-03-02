import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
export const comicsTable = mysqlTable("comics_table", {
  id: int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  link: varchar({ length: 255 }).notNull(),
  chapter: int().notNull(),
});
