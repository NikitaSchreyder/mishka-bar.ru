import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import CategoryItem from '../../components/CategoryItem';
import { axiosApi } from '../../../core/api/AxiosApi';
import DishesItem from '../../components/DishesItem';
import { useModalControl } from '../../../core/hooks/useModalControl';
import { UpdateCategoryModal } from '../../modals/AdminModals';
import { IDishesItemProps } from '../../types/types';

const AdminMenuDishesPanel: React.FC = () => {
  const [dishes, setDishes] = useState<any[]>()
  const [updatedItem, setUpdatedItem] = useState<IDishesItemProps>()

  const updateModalControl = useModalControl()
  const showUpdateModal = (item: IDishesItemProps) => {
    setUpdatedItem(item)
    updateModalControl.openModal()
  }


  useEffect(() => {
    axiosApi.get('menu/dishes')
      .then(res => {
        const { data } = res
        setDishes(data)
      })
  }, [])

  const renderDishes = useMemo(() => {
    if(dishes?.length) return dishes.map(item => <DishesItem showUpdateModal={() => showUpdateModal(item)} item={item} />)
    return <div style={{color: 'white'}}>Нет блюд </div>
  }, [dishes]) 

  return (
    <>
      <UpdateCategoryModal updatedItem={updatedItem} closeModal={updateModalControl.closeModal} open={updateModalControl.toShow} />
      <div style={{padding: 20}}>
        <Button style={{marginBottom: 20}}>Новое блюдо</Button>
        {renderDishes}
      </div>
    </>
  )
}

export default AdminMenuDishesPanel;