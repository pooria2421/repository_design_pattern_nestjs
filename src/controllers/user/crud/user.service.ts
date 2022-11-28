import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/models/mysql";
import __Main_Repo from "src/repository/user/crud/main.repo";
import { __Seeder_Repo } from "src/repository/user/crud/seeder.repo";
@Injectable()
export class UserService<Interface> extends __Seeder_Repo {}
