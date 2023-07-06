export interface IAdminIndexPageProps {}

export interface ICategoryItemProps {
  id: string 
  name: string
  searchLink: string
  thumbUrl: string
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