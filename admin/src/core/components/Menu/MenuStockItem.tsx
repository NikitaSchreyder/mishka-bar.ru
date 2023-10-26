import { Image } from 'antd'
import { IMenuCategoryItemProps } from './data/types'
import { TStocksItem } from '../../types/menu'

interface IMenuStockItem {
  item: TStocksItem,
  onClick: (item: any) => void
}

const MenuStockItem: React.FC<IMenuStockItem> = ({item, onClick}) => {
  return (
    <li onClick={() => onClick(item)} className="menu-category_item">
      <Image alt={item.name} className="menu-category_item-image" preview={false} src={item.thumbUrl} />
      <p className="menu-category_item-name">{item.name}</p>
    </li>
  )
}

export default MenuStockItem