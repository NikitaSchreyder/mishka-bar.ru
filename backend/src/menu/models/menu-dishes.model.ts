import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { CreateMenuDishDto } from '../dto/menu-categories.dto';

@Table({ tableName: 'menu-dishes', createdAt: false, updatedAt: false })
export class MenuDishesModel extends Model<MenuDishesModel, CreateMenuDishDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string

  @Column({type: DataType.STRING, allowNull: false})
  price: string

  @Column({type: DataType.STRING, allowNull: false})
  thumbUrl: string

  @Column({type: DataType.STRING, allowNull: false})
  searchLink: string

  @Column({type: DataType.STRING, allowNull: false})
  composition: string

  @Column({type: DataType.STRING, allowNull: false})
  categorySearchLink: string

  @Column({type: DataType.BOOLEAN, allowNull: false})
  isHidden: boolean
}