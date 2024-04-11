import { Injectable } from '@nestjs/common';
import { Task } from 'src/schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll() {
    return await this.taskModel.find();
  }

  async findTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return await newTask.save();
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

  async deleteTask(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
