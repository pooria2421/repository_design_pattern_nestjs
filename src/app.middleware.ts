import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { Ctx, Payload, RmqContext } from "@nestjs/microservices";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor() {}
  use(
    @Payload() data: number[],
    @Ctx() context: RmqContext,
    next: NextFunction
  ) {}
}
