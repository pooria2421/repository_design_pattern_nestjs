import {
  EntityManager,
  EntityTarget,
  FindManyOptions,
  ObjectLiteral,
  QueryRunner,
  Repository,
} from "typeorm";

// export class __Mysql_Repo{
export declare class __Mysql_Repo<Entity extends ObjectLiteral> {
  readonly target: EntityTarget<Entity>;
  /**
   * Entity Manager used by this repository.
   */
  readonly manager: EntityManager;
  /**
   * Query runner provider used for this repository.
   */
  readonly queryRunner?: QueryRunner;
  /**
   * Entity metadata of the entity current repository manages.
   */

  constructor(
    target: EntityTarget<Entity>,
    manager: EntityManager,
    queryRunner?: QueryRunner
  );

  find(options?: FindManyOptions<Entity>): Promise<Entity[]>;
}
