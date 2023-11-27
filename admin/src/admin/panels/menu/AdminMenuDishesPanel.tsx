import { Button, Collapse } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CategoryItem from '../../components/CategoryItem';
import { axiosApi } from '../../../core/api/AxiosApi';
import DishesItem from '../../components/DishesItem';
import { useModalControl } from '../../../core/hooks/useModalControl';
import { IDishesItemProps } from '../../types/types';
import { CreateDishModal, UpdateDishModal } from '../../modals/AdminModals';
import { getCookie } from '../../../core/helpers/cookies';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';

const AdminMenuDishesPanel: React.FC = () => {
  const [dishes, setDishes] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
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

  const getCategories = () => {
    axiosApi(token).get('menu/categories/all')
      .then(res => {
        const { data } = res
        setCategories(data)
      })
  }

  useEffect(() => {
    updateDishes()
    getCategories()
  }, [])

  const renderDishes = useCallback(() => {
    if(dishes?.length && categories?.length) {
      return (
        <Collapse 
          style={{width: '100%'}}
          items={
            categories?.map((item, index) => ({
              label: <p style={{color: 'white'}}>{item.name}</p>, 
              key: index,
              children: 
              (
                <div style={{backgroundColor: 'black', display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between'}}>
                  {dishes.filter(dish => dish.categorySearchLink === item.searchLink).map(item => <DishesItem key={item.id} updateDishes={updateDishes} showUpdateModal={() => showUpdateModal(item)} item={item} />)}
                </div> 
              )
            }))
          }
        />
      )
    }
    return <div style={{color: 'white'}}>Нет блюд </div>
  }, [dishes, categories]) 

  return (
    <>
      <CreateDishModal updateDishes={updateDishes} closeModal={createModalControl.closeModal} open={createModalControl.toShow} />
      <UpdateDishModal updateDishes={updateDishes} updatedItem={updatedItem} closeModal={updateModalControl.closeModal} open={updateModalControl.toShow} />
      <Button onClick={createModalControl.openModal} style={{marginBottom: 20}}>Новое блюдо</Button>
      <div style={{padding: 20, display: 'flex', flexWrap: 'wrap', gap: 20}}>
        {renderDishes()}
      </div>
    </>
  )
}

export default AdminMenuDishesPanel;