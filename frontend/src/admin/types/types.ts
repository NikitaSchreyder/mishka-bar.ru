export interface IAdminIndexPageProps {}

export interface ICategoryItemProps {
  item: {
    id: string 
    name: string
    searchLink: string
    thumbUrl: string
  }
  showUpdateModal: () => void

}

export interface IDishesItemProps {
  item: {
    id: string 
    name: string
    searchLink: string
    thumbUrl: string
  }
  showUpdateModal: () => void
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