import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "projeto",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
