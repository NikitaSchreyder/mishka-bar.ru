import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { axiosApi } from '../../../core/api/AxiosApi';
import { useModalControl } from '../../../core/hooks/useModalControl';
import { IDishesItemProps, IStockItemProps } from '../../types/types';
import StocksItem from '../../components/StocksItem';
import { CreateStockModal, UpdateStockModal } from '../../modals/AdminModals';

const AdminStocksPanel: React.FC = () => {
  const [stocks, setStocks] = useState<any[]>()
  const [updatedItem, setUpdatedItem] = useState<IStockItemProps>()

  const createModalControl = useModalControl()

  const updateModalControl = useModalControl()
  const showUpdateModal = (item: IStockItemProps) => {
    setUpdatedItem(item)
    updateModalControl.openModal()
  }

  const updateStocks = () => {
    axiosApi.get('stocks')
      .then(res => {
        const { data } = res
        setStocks(data)
      })
  }

  useEffect(() => {
    updateStocks()
  }, [])

  const renderStocks = useMemo(() => {
    if(stocks?.length) return stocks.map(item => <StocksItem key={item.id} updateDishes={updateStocks} showUpdateModal={() => showUpdateModal(item)} item={item} />)
    return <div style={{color: 'white'}}>Нет акций</div>
  }, [stocks]) 

  return (
    <>
      <CreateStockModal closeModal={createModalControl.closeModal} open={createModalControl.toShow} updateStocks={updateStocks} />
      <UpdateStockModal updatedItem={updatedItem} closeModal={updateModalControl.closeModal} open={updateModalControl.toShow} updateStocks={updateStocks}/>
      <div style={{padding: 20}}>
        <Button onClick={createModalControl.openModal} style={{marginBottom: 20}}>Новая акция</Button>
        {renderStocks}
      </div>
    </>
  )
}

export default AdminStocksPanel;