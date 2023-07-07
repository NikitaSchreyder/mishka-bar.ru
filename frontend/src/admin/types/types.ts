export interface IAdminIndexPageProps {
  isAdmin: boolean
}

export interface ICategoryItemProps {
  item: {
    id: string 
    name: string
    searchLink: string
    thumbUrl: string
  }
  showUpdateModal: () => void
  updateCategories: () => void
}

export interface IDishesItemProps {
  item: {
    id: string 
    name: string
    searchLink: string
    thumbUrl: string
  }
  showUpdateModal: () => void
  updateDishes: () => void
}

export interface ICategoriesItemProps {
  item: {
    id: string 
    name: string
    searchLink: string
    thumbUrl: string
  }
  showUpdateModal: () => void
}

export interface IStockItemProps {
  item: {
    id: string 
    name: string
    description: string
    thumbUrl: string
  }
  showUpdateModal: () => void
  updateStocks: () => void
}