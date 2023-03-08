import { Task } from '@/src/models/task';
import prisma from "../database/db";
import { task } from "@prisma/client";
import { AbstractTaskRepository } from "./AbstractTaskRepository";

export class TaskRepository{

    async create({ name, description }: Task<number>): Promise<void> {

        await prisma.task.create({
            data: {
                name: name,
                description: description
            }
        })
        
    }

    async getAll(): Promise<task[]>{
        const task = await prisma.task.findMany()
        return task
    }
}