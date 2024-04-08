import { Injectable } from '@nestjs/common';
import { Task } from 'src/schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    this.taskModel.find();
  }

  async createTask(createTask: any) {
    const newTask = new this.taskModel(createTask);
    return await newTask.save();
  }

  async updateTask(id: string) {
    return await this.taskModel.findByIdAndUpdate(id);
  }

  async deleteTask(id: string, task: any) {
    return await this.taskModel.findByIdAndDelete(id, task);
  }
}
