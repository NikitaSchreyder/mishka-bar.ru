import { IMenuCategoriesProps } from './data/types'

const MenuCategory: React.FC<IMenuCategoriesProps> = ({children}) => {
  return (
    <ul className="menu-category_items">
      {children}
    </ul>
  )
}

export default MenuCategory