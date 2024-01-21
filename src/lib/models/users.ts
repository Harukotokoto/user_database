import mongoose, { Schema, Document, Model, models } from 'mongoose'

export interface UserDoc extends Document {
  avatarURL: string
  displayName: string
  username: string
  user_id: string
  reason: string
  categories: string
}

const userSchema: Schema = new Schema({
  avatarURL: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
})

interface UserModel extends Model<UserDoc> {}

export default models.User
  ? (models.User as UserModel)
  : mongoose.model<UserDoc, UserModel>('User', userSchema)
