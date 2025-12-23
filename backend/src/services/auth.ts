import type { ModelStatic, InferAttributes } from 'sequelize';
import type { User as UserModel } from '../models/User/User.ts';
import type { CreateUserDto, GetUserDto } from '../dto/user/index.ts';

export class AuthService {
  private userModel: ModelStatic<UserModel>;
  constructor(userModel: ModelStatic<UserModel>) {
    this.userModel = userModel;
  }

  createUser = async (data: CreateUserDto) => {
    return await this.userModel.create(data);
  };

  getUser = async (obj: GetUserDto) => {
    return await this.userModel.findOne({
      where: obj as Partial<InferAttributes<UserModel>>,
    });
  };
}
