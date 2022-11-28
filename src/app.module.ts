import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  DynamicModule,
} from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

// simple import controllers and services
import { UserController, UserService } from "./controllers/index";

import { AppMiddleware } from "./app.middleware";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

//mongoose models
import { UserSchem } from "./models/mongo/index";
import { MongooseModule } from "@nestjs/mongoose";
import microservices from "./microservices.object";
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb://localhost/test"),
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: UserSchem,
      },
    ]),
    ClientsModule.register(microservices),
  ],
  controllers: [
    UserController,
    //...
  ],
  providers: [
    UserService,
    //...
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware);
  }
}
