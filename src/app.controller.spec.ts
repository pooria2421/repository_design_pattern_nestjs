import { Test, TestingModule } from "@nestjs/testing";

import { UserController, UserService } from "./controllers/index";

describe("AppController", () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe("root", () => {
    it('should return "hello world!"', () => {});
  });
});
