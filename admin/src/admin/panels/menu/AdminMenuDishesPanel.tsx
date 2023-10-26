import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import CategoryItem from '../../components/CategoryItem';
import { axiosApi } from '../../../core/api/AxiosApi';
import DishesItem from '../../components/DishesItem';
import { useModalControl } from '../../../core/hooks/useModalControl';
import { IDishesItemProps } from '../../types/types';
import { CreateDishModal, UpdateDishModal } from '../../modals/AdminModals';
import { getCookie } from '../../../core/helpers/cookies';

const AdminMenuDishesPanel: React.FC = () => {
  const [dishes, setDishes] = useState<any[]>()
  const [updatedItem, setUpdatedItem] = useState<IDishesItemProps>()
  const token = getCookie('token')

  const createModalControl = useModalControl()

  const updateModalControl = useModalControl()
  const showUpdateModal = (item: IDishesItemProps) => {
    setUpdatedItem(item)
    updateModalControl.openModal()
  }

  const updateDishes = () => {
    axiosApi(token).get('menu/dishes/all')
      .then(res => {
        const { data } = res
        setDishes(data)
      })
  }

  useEffect(() => {
    updateDishes()
  }, [])

  const renderDishes = useMemo(() => {
    if(dishes?.length) return dishes.map(item => <DishesItem key={item.id} updateDishes={updateDishes} showUpdateModal={() => showUpdateModal(item)} item={item} />)
    return <div style={{color: 'white'}}>Нет блюд </div>
  }, [dishes]) 

  return (
    <>
      <CreateDishModal updateDishes={updateDishes} closeModal={createModalControl.closeModal} open={createModalControl.toShow} />
      <UpdateDishModal updateDishes={updateDishes} updatedItem={updatedItem} closeModal={updateModalControl.closeModal} open={updateModalControl.toShow} />
      <Button onClick={createModalControl.openModal} style={{marginBottom: 20}}>Новое блюдо</Button>
      <div style={{padding: 20, display: 'flex', flexWrap: 'wrap', gap: 20}}>
        {renderDishes}
      </div>
    </>
  )
}

export default AdminMenuDishesPanel;