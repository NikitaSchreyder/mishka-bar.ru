import { Image } from 'antd'
import { IMenuCategoryItemProps } from './data/types'

const MenuCategoryItem: React.FC<IMenuCategoryItemProps> = ({item, onClick}) => {
  return (
    <li onClick={() => onClick(item)} className="menu-category_item">
      <Image alt={item.name} className="menu-category_item-image" preview={false} src={item.thumbUrl} />
      <p className="menu-category_item-name">{item.name}</p>
    </li>
  )
}

export default MenuCategoryItem