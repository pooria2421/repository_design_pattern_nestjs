import { QueryRunner } from "typeorm";
import { USERS } from "./faker";
import { MainInterface } from "./interface";

export class __Seeder_Repo implements MainInterface {
  constructor() {}

  find() {
    console.log(USERS);
    return USERS;
  }

  findAll() {}
}
