import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // rabbit connection
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://127.0.0.1:5672"],
      queue: "notification_queue",
      queueOptions: {
        durable: false,
      },
    },
  });

  // redis connection
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      host: "localhost",
      port: 6379,
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
