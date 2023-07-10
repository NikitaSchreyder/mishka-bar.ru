import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { UpdateAboutDto } from '../dtos/about.dto';

@Table({ tableName: 'about', createdAt: false, updatedAt: false })
export class AboutModel extends Model<AboutModel, UpdateAboutDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  thumbUrl: string

  @Column({type: DataType.STRING, allowNull: false})
  description: string
}