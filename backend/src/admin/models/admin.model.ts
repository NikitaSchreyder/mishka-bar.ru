import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { CreateAdminDto } from '../dtos/admin.dto';

@Table({ tableName: 'admin', createdAt: false, updatedAt: false })
export class AdminModel extends Model<AdminModel, CreateAdminDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login: string

  @Column({type: DataType.STRING, allowNull: false})
  password: string
}