import Link from 'next/link'
import { TMenuCategory } from '../../types/menu'

const MenuCategoriesItem: React.FC<TMenuCategory> = ({name, searchLink, thumbUrl, menuType}) => {
  return (
    <li className="menu-categories_item">
      <Link className="menu-categories_item--link" href={`/${menuType}/${searchLink}`}>
        <p className="menu-categories_item-name">{name}</p>
      </Link>
    </li>
  )
}

export default MenuCategoriesItem