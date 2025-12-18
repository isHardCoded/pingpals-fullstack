import { DataTypes } from 'sequelize';
import type { Post as PostTypes } from './types.ts';
import { sequelize } from '../../config/database.ts';

export const Post = sequelize.define<PostTypes>(
  'Post',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'posts',
  },
);
