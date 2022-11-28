import { Body, Controller, Get, Inject, Req } from "@nestjs/common";
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from "@nestjs/microservices";
import { UserEntity } from "src/models/mysql";
import { MainInterface } from "src/repository/user/crud/interface";
import __Main_Repo from "src/repository/user/crud/main.repo";
import { __Mysql_Repo } from "src/repository/user/crud/mysql.repo";
import { UserService } from "../user.service";

@Controller("v1/user")
export class UserController {
  constructor(
    @Inject("NOTIF_SERVICE") private subscribersService: ClientProxy,

    private readonly repository: UserService<MainInterface>
  ) {}

  @MessagePattern("notifications")
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    return this.repository.find();
  }
}
