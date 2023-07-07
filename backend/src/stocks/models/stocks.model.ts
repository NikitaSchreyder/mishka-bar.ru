import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { CreateStockDto } from '../dto/stocks.dto';

@Table({ tableName: 'stocks', createdAt: false, updatedAt: false })
export class StocksModel extends Model<StocksModel, CreateStockDto> {
  @Column({type: DataType.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string

  @Column({type: DataType.STRING, allowNull: false})
  description: string

  @Column({type: DataType.STRING, allowNull: false})
  thumbUrl: string
}