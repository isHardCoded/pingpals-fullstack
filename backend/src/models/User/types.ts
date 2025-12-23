import {
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

export interface User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  id: number;
  password: string;
  username: string;
  email: string;
  firstName: CreationOptional<string>;
  lastName: CreationOptional<string>;
}
