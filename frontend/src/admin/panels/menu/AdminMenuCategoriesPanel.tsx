import { useEffect, useMemo, useState } from 'react'
import CategoryItem from '../../components/CategoryItem'

import { Button } from 'antd'
import { axiosApi } from '../../../core/api/AxiosApi'
import { useModalControl } from '../../../core/hooks/useModalControl'
import { CreateCategoryModal, UpdateCategoryModal, UpdateDishModal } from '../../modals/AdminModals'
import { ICategoriesItemProps } from '../../types/types'

const AdminMenuCategoriesPanel: React.FC = () => {
  const [categories, setCategories] = useState<any[]>()
  const [updatedItem, setUpdatedItem] = useState<ICategoriesItemProps>()
  
  const createModalControl = useModalControl()

  const updateModalControl = useModalControl()
  const showUpdateModal = (item: ICategoriesItemProps) => {
    setUpdatedItem(item)
    updateModalControl.openModal()
  }

  useEffect(() => {
    axiosApi.get('menu/categories')
      .then(res => {
        const { data } = res
        setCategories(data)
      })
  }, [])

  const renderCategories = useMemo(() => {
    if(categories?.length) return categories.map(item => <CategoryItem item={item} showUpdateModal={() => showUpdateModal(item)} />)
    return <div style={{color: 'white'}}>Нет категорий </div>
  }, [categories]) 

  return (
    <>
      <CreateCategoryModal closeModal={createModalControl.closeModal} open={createModalControl.toShow} />
      <UpdateCategoryModal updatedItem={updatedItem} closeModal={updateModalControl.closeModal} open={updateModalControl.toShow} />
      <div style={{padding: 20}}>
        <Button onClick={createModalControl.openModal} style={{marginBottom: 20}}>Новая категория</Button>
        {renderCategories}
      </div>
    </>
  )
}

export default AdminMenuCategoriesPanel