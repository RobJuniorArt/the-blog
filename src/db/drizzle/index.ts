import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
dotenv.config();
export const drizzleDb = drizzle(process.env.DATABASE_URL!);
