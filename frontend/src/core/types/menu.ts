export type TMenuCategory = {
  name: string
  searchLink: string
  thumbUrl: string
  menuType: 'bar' | 'menu'
}

export type TMenuItem = {
  name: string
  description: string
  price: number
  thumbUrl: string
  categorySearchLink: string
}

export interface IMenuIndexPageProps {
  categories: TMenuCategory[]
}

export interface IMenuCategoryIndexPageProps {
  categoryName: string
  categoryItems: TMenuItem[]
}