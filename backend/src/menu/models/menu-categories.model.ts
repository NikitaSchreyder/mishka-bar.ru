import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { CreateMenuCategoryDto } from '../dto/menu-categories.dto';
import { MenuDishesModel } from './menu-dishes.model';

@Table({ tableName: 'menu-categories', createdAt: false, updatedAt: false })
export class MenuCategoriesModel extends Model<MenuCategoriesModel, CreateMenuCategoryDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string

  @Column({type: DataType.STRING, allowNull: false})
  searchLink: string

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  thumbUrl: string

  @HasMany(() => MenuDishesModel)
  dishes: MenuDishesModel
}