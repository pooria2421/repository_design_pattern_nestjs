import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/models/mysql";
import { QueryRunner } from "typeorm";
import { MainInterface } from "./interface";
import { __Mongo_Repo } from "./mongo.repo";
import { __Mysql_Repo } from "./mysql.repo";
import { __Redis_Repo } from "./redis.repo";
import { __Seeder_Repo } from "./seeder.repo";

export default class __Main_Repo implements MainInterface {
  constructor(
    readonly mysql: __Mysql_Repo<UserEntity>,
    readonly redis: __Redis_Repo,
    public mongo: __Mongo_Repo,
    private readonly seed: __Seeder_Repo
  ) {}

  async find() {
    this.seed.find();
    return this.mysql.find();
  }

  async findAll() {
    return this.mysql.find();
  }
}
