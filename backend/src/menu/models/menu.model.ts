import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { CreateMenuItemDto } from '../dto/menu.dto';

@Table({ tableName: 'menu', createdAt: false, updatedAt: false })
export class MenuModel extends Model<MenuModel, CreateMenuItemDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string

  @Column({type: DataType.INTEGER, allowNull: false})
  price: number

  @Column({type: DataType.STRING, allowNull: false})
  thumbUrl: string
}