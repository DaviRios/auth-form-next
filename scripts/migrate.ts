import { migrate } from "drizzle-orm/node-postgres/migrator";
import { openConnection } from "@/config/db";

async function main() {
  const { db, closeConnection } = await openConnection();
  await migrate(db, { migrationsFolder: "drizzle" });
  await closeConnection();
}

main();
