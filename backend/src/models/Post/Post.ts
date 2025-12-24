import type { Post as PostTypes } from './types.ts';
import { sequelize } from '../../config/database.ts';
import type {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export class Post extends Model<
  InferAttributes<PostTypes>,
  InferCreationAttributes<PostTypes>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'posts',
  },
);
