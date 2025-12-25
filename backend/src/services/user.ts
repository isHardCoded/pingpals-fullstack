import { InferAttributes, ModelStatic } from 'sequelize';
import type { User as UserModel } from '../models/User/User.ts';
import { CreateUserDto, GetUserDto } from '../dto/user/index.js';

export class UserService {
  constructor(private userModel: ModelStatic<UserModel>) {}

  getUser = async (obj: GetUserDto) => {
    return await this.userModel.findOne({
      where: obj as Partial<InferAttributes<UserModel>>,
    });
  };

  create = async (data: CreateUserDto) => {
    return this.userModel.create(data);
  };
}
