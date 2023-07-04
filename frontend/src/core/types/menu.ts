export type TMenuCategory = {
  name: string
  searchLink: string
  thumbUrl: string
  menuType: 'bar' | 'menu'
}

export type TMenuItem = {
  name: string
  composition: string[]
  price: number | string
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

export type TStocksItem = {
  name: string,
  description: string,
  thumbUrl: string,
}