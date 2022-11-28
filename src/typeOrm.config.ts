import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConnectionOptions } from "mysql2/typings/mysql";
import { join } from "path";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "test",
  entities: ["src/models/**/*{.js,.ts}"],
  migrations: ["src/migrations/**/*{.js,.ts}"],
  subscribers: ["src/subscribers/**/*{.js,.ts}"],
  synchronize: true,
});
