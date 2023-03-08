import { TaskRepository } from '@/src/repositories/taskRepository';
import { Task } from "@/src/models/task";
import { AbstractTaskRepository } from '@/src/repositories/AbstractTaskRepository';

export class GetAllTasksServices {
    constructor(private TaskRepository: TaskRepository){}

    execute(){
        return this.TaskRepository.getAll()
    }
}