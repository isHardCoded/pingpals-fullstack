import { InferAttributes, ModelStatic, UniqueConstraintError } from 'sequelize';
import type { User as UserModel } from '../models/User/User.ts';
import { CreateUserDto, GetUserDto } from '../dto/user/index.js';
import { AppError } from '../errors/app.js';

export class UserService {
  constructor(private userModel: ModelStatic<UserModel>) {}

  getUser = async (obj: GetUserDto) => {
    return await this.userModel.findOne({
      where: obj as Partial<InferAttributes<UserModel>>,
    });
  };

  create = async (data: CreateUserDto) => {
    try {
      return await this.userModel.create(data);
    } catch (e) {
      throw new AppError('User already exists', 409);
    }
  };
}
