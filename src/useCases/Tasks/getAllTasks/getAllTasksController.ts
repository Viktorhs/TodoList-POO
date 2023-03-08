import { GetAllTasksServices } from './getAllTasksServices';
import { Request, Response } from "express";

export class getAllTasksController {
    constructor(private GetAllTasksServices : GetAllTasksServices) {}

    async handle(req: Request, res: Response): Promise<Response>{
        const tasks = await this.GetAllTasksServices.execute();

        return res.send(tasks).status(200);
    }
}