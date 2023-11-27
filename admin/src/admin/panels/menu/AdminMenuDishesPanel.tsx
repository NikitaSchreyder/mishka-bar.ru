import { Button, Collapse } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import CategoryItem from '../../components/CategoryItem';
import { axiosApi } from '../../../core/api/AxiosApi';
import DishesItem from '../../components/DishesItem';
import { useModalControl } from '../../../core/hooks/useModalControl';
import { IDishesItemProps } from '../../types/types';
import { CreateDishModal, UpdateDishModal } from '../../modals/AdminModals';
import { getCookie } from '../../../core/helpers/cookies';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';

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
    const categories = dishes?.map(item => item.categorySearchLink)
    const uniqueCategories = categories?.filter((item, index) => categories.indexOf(item) === index)
    if(dishes?.length) {
      return (
        <Collapse 
          style={{width: '100%'}}
          items={
            uniqueCategories?.map((item, index) => ({
              label: (<p style={{color: 'white'}}>{item}</p>), 
              key: index,
              children: (
                <div style={{backgroundColor: 'black', display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between'}}>
                  {dishes.filter(dish => dish.categorySearchLink === item).map(item => <DishesItem key={item.id} updateDishes={updateDishes} showUpdateModal={() => showUpdateModal(item)} item={item} />)}
                </div> 
                )
            }))
          }
        />
      )
      // categories?.map((item, index) => {
      //   return (
      //     <Collapse items={[
      //       {label: item.categorySearchLink, key: index, children: (
      //           <div style={{padding: 20, display: 'flex', flexWrap: 'wrap', gap: 20}}>
      //             {dishes.filter(dish => dish.categorySearchLink === item).map(dishItem => <DishesItem key={item.id} updateDishes={updateDishes} showUpdateModal={() => showUpdateModal(item)} item={item} />)}
      //           </div>
      //         )}
      //       ]} 
      //     />
      //   )
      // })
    }
    // if(dishes?.length) return dishes.map(item => <DishesItem key={item.id} updateDishes={updateDishes} showUpdateModal={() => showUpdateModal(item)} item={item} />)
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