import { task } from "@prisma/client";
import { Task } from "../models/task";

export abstract class AbstractTaskRepository {
    abstract create({name, description}: Task<number>): void
    abstract getAll(): Promise<task[]>
}