import { IMenuCategoriesProps } from './data/types'

const MenuCategories: React.FC<IMenuCategoriesProps> = ({children}) => {
  return (
    <ul className="menu-categories">
      {children}
    </ul>
  )
}

export default MenuCategories