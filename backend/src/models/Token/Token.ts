import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/database.js';

export class Token extends Model {
  declare id: number;
  declare userId: number;
  declare token: string;
}

Token.init(
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tokens',
  },
);
