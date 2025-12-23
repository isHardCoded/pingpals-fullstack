import { ModelStatic, InferAttributes } from 'sequelize';
import type { User as UserModel } from '../models/User/User.ts';
import { CreateUserDto, GetUserDto } from '../dto/user/index.ts';

export class AuthService {
  constructor(private userModel: ModelStatic<UserModel>) {}

  createUser = async (data: CreateUserDto) => {
    return await this.userModel.create(data);
  };

  getUser = async (obj: GetUserDto) => {
    return await this.userModel.findOne({
      where: obj as Partial<InferAttributes<UserModel>>,
    });
  };
}
