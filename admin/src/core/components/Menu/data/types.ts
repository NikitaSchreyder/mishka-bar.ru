import { TMenuItem } from '../../../types/menu'

export interface IMenuCategoriesProps {
  children?: any
}

export interface IMenuCategoryItemProps {
  item: TMenuItem
  onClick: (item: TMenuItem) => void
}