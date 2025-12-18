import {
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

export interface Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post>
> {
  id: number;
  title: string;
  content: CreationOptional<string>;
}
