import { MainInterface } from "./interface";
import { createClient } from "redis";

export class __Redis_Repo implements MainInterface {
  constructor(
    readonly client = createClient({
      database: 1,
    })
  ) {}
  async find() {
    return this.client.set("key", "value");
  }
  async findAll() {
    return this.client.get("key");
  }
}
