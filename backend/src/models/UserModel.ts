import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces';

interface IUserModel extends IUser, Document {}

const UserSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: [true, 'Name is required.']
    },
    rank: {
      type: Number,
      required: true
    }
  },
  { versionKey: false, timestamps: true }
);

export default model<IUserModel>('User', UserSchema);
