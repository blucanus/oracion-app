import mongoose, { Document, Schema } from 'mongoose'
import { IUser } from './User'

export interface ISchedule extends Document {
  user: IUser['_id']
  day: string
  hour: number
}

const scheduleSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, required: true },
  hour: { type: Number, required: true, min: 0, max: 23 },
})

export default mongoose.model<ISchedule>('Schedule', scheduleSchema)
