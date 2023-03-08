import { createTaskController } from './../useCases/Tasks/createTask/index';
import { getAllTaskController } from '@/src/useCases/Tasks/getAllTasks/index';
import { Router } from "express";

const tasksRouter = Router();

tasksRouter.get("/tasks", (req, res) => getAllTaskController.handle(req, res))
tasksRouter.post("/tasks", (req, res) => createTaskController.handle(req, res))

export default tasksRouter