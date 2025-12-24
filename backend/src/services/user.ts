import { InferAttributes, ModelStatic } from 'sequelize';
import type { User as UserModel } from '../models/User/User.ts';
import { CreateUserDto, GetUserDto } from '../dto/user/index.js';

export class UserService {
  private userModel: ModelStatic<UserModel>;

  constructor(userModel: ModelStatic<UserModel>) {
    this.userModel = userModel;
  }

  getUser = async (obj: GetUserDto) => {
    return await this.userModel.findOne({
      where: obj as Partial<InferAttributes<UserModel>>,
    });
  };

  create = async (data: CreateUserDto) => {
    return this.userModel.create(data);
  };
}
