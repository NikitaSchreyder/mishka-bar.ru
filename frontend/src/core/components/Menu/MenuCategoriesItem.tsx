import { Image } from 'antd'
import Link from 'next/link'
import { TMenuCategory } from '../../types/menu'

const MenuCategoriesItem: React.FC<TMenuCategory> = ({name, searchLink, thumbUrl, menuType}) => {
  return (
    <li className="menu-categories_item">
      <Link className="menu-categories_item--link" href={`/${menuType}/${searchLink}`}>
        <Image alt={name} className="menu-category_item-image" preview={false} src={thumbUrl} />
        <p className="menu-categories_item-name">{name}</p>
      </Link>
    </li>
  )
}

export default MenuCategoriesItem