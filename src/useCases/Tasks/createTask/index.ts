import { CreateTaskController } from './createTaskController';
import { CreateTaskService } from './createTaskService';
import { TaskRepository } from '@/src/repositories/taskRepository';

const taskRepository = new TaskRepository()
const createTaskService = new CreateTaskService(taskRepository)
export const createTaskController = new CreateTaskController(createTaskService)