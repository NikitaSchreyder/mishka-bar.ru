import { Button, Input, message } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../../../../core/api/AxiosApi'

const UpdateStockModalContent: React.FC<{updatedItem: any, closeModal: () => void, updateStocks: () => void}> = ({updatedItem, closeModal, updateStocks}) => {
  const { TextArea } = Input;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    formData.append('id', updatedItem.id)
    axiosApi.put('/stocks/update', formData)  
      .then(data => {
        closeModal()
        message.success(data.data.message)
        updateStocks()
      })  
      .catch(err => message.error(err.response.data.message))
  }

  return (
    <div style={{padding: 20}}>
      <form onSubmit={onSubmit}>
      <label style={{color: 'white', marginBottom: 10}} htmlFor='photo'>Фото</label>
        <input style={{marginBottom: 20}} type='file' name='photo'  />
        
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" defaultValue={updatedItem.name} />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='description'>Описание</label>
        <TextArea rows={4} style={{marginBottom: 20}} name='description' id="description" defaultValue={updatedItem.description} />

        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default UpdateStockModalContent