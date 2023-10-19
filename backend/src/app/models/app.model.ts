import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'app', createdAt: false, updatedAt: false })
export class AppModel extends Model<AppModel> {
  @Column({type: DataType.BOOLEAN, allowNull: false})
  isDev: boolean
}