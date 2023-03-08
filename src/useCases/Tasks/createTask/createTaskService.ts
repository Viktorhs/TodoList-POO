import { TaskRepository } from "@/src/repositories/taskRepository";
import { AbstractTaskRepository } from "@/src/repositories/AbstractTaskRepository";
import { Task } from "@/src/models/task";

interface ITaskDTO {
    name: string,
    description: string
}

export class CreateTaskService {

    constructor(private TaskRepository: TaskRepository){}

    execute({name, description}: ITaskDTO): void{
        this.TaskRepository.create( new Task(name, description))
    }

}