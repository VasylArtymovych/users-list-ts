import { CustomError } from '../helpers';
import { IUserData } from '../interfaces';
import { UserModel } from '../models';

class UserServices {
  addUser = async (body: IUserData) => {
    const { userName } = body;
    if (!userName) {
      throw new CustomError('UserName is required.');
    }

    const rank = this.generateRank(10, 100);
    const user = UserModel.create({ userName, rank });

    if (!user) {
      throw new CustomError('Unable to save User to DB.');
    }
    return user;
  };

  getAllUsers = async () => {
    const users = UserModel.find({});
    if (!users) {
      throw new CustomError('Unable to get users.', 500, 'Try again');
    }
    return users;
  };

  updateUser = async (id: string, body: IUserData) => {
    const user = await UserModel.findByIdAndUpdate(id, { ...body }, { new: true });
    if (!user) {
      throw new CustomError('User not found.', 400, 'Check user Id.');
    }
    return user;
  };

  deleteUser = async (id: string) => {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
      throw new CustomError('User not found.', 400, 'Check user Id.');
    }
    return true;
  };

  generateRank = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
  };
}

export default new UserServices();
