export interface IRepository<T> {
    create(entity: T): Promise<T>;
    update(filter:T, entity: T): Promise<T>;
    delete(id: string): Promise<T>;
    findAll(filter: T): Promise<T[]>;
}

export interface ISuccessRequest {
  message: unknown;
  error: boolean;
}