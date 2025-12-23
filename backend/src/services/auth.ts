import { User } from '../models/User/User.ts';
import { CreateUserDto } from '../dto/user/index.ts';
import { GetUserDto } from '../dto/user/index.ts';
import { InferAttributes } from 'sequelize';

const createUser = async (data: CreateUserDto) => {
  return await User.create(data);
};

const getUser = async (obj: GetUserDto) => {
  return await User.findOne({
    where: obj as Partial<InferAttributes<User>>,
  });
};
