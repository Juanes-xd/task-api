import { Injectable } from '@nestjs/common';
import { Task } from 'src/schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTask } from 'src/dto/create-task.dto';
import { UpdateTask } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    this.taskModel.find();
  }

  async createTask(createTask: CreateTask) {
    const newTask = new this.taskModel(createTask);
    return await newTask.save();
  }

  async updateTask(id: string, task: UpdateTask) {
    return await this.taskModel.findByIdAndUpdate(id, task);
  }

  async deleteTask(id: string, task: any) {
    return await this.taskModel.findByIdAndDelete(id, task);
  }
}
