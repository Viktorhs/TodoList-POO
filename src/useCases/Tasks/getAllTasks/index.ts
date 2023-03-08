import { GetAllTasksServices } from './getAllTasksServices';
import { TaskRepository } from '@/src/repositories/taskRepository';
import { getAllTasksController } from './getAllTasksController';

const taskRepository = new TaskRepository()
const getAllTaskService = new GetAllTasksServices(taskRepository);
export const getAllTaskController = new getAllTasksController(getAllTaskService)
