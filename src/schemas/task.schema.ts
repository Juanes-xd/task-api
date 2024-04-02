import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    trim: true,
    required: true,
  })
  title: string;
  @Prop({
    trim: true,
  })
  description: string;
  @Prop({
    default: false,
  })
  done: string;
}

export const TaksSchema = SchemaFactory.createForClass(Task);
