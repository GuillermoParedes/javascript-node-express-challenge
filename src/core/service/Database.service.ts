import { Prisma, PrismaClient } from "@prisma/client";
import { IRepository } from "../interface/IRepository";

class PrismaService extends PrismaClient{
  constructor() {
    super({ log: ['info', 'error', 'warn'] });
  }
}


export abstract class DatabaseService extends PrismaService implements IRepository<any>{
    tableName: Prisma.ModelName;

    constructor(private model: Prisma.ModelName){ 
        super();
        this.tableName = Prisma.ModelName[model];
    }
    async findAll() {
        return this[this.tableName].findMany();
    }

    async create(data: any) {
        return this[this.tableName].create({data});
    }

    async findOne(filter: any) {
        return this[this.tableName].findFirst(filter);
    }

    async findById(id: string) {
        try {
            return this[this.tableName].findFirst({
                where: {
                    id
                }
            });    
        } catch (erro: any) {
            return {
                error: true,
                message: erro.message
            }
        }
        
    }

    async update(filter: any, data: any) {
        try {
            return this[this.tableName].update({
                where: filter,
                data
            });
        } catch (erro: any) {
            return {
                error: true,
                message: erro.message
            }
        }
    }

    async delete(id: string) {
        try {
            return this[this.tableName].delete({
                where: { id }
            });
        } catch (error: any) {
            return {
                error: true,
                message: error.message
            }
        }
    }

}