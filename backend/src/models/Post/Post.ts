import { sequelize } from '../../config/database.js';
import type {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { DataTypes, Model } from 'sequelize';

import { User } from '../User/User.js';

export class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare content: string;
  declare authorId: number;
  declare likesCount: CreationOptional<number>;
  declare commentsCount: CreationOptional<number>;

  declare author?: User;
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
    authorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    likesCount: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    commentsCount: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'posts',
    timestamps: true,
  },
);

Post.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
