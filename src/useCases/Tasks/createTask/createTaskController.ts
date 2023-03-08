import { Task } from '@/src/models/task';
import { Request, Response } from "express";
import { CreateTaskService } from "./createTaskService";

export class CreateTaskController{
    constructor(private CreateTaskService: CreateTaskService){}

    handle(req: Request, res:Response){

        const {name, description}: Task<number> = req.body
        this.CreateTaskService.execute({name, description})
        res.sendStatus(200)

    }
}