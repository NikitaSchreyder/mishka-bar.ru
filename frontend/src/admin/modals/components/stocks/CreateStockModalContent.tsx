import { Button, Input, message } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../../../../core/api/AxiosApi'
import { useRouter } from 'next/router'

const CreateStockModalContent: React.FC<{closeModal: () => void, updateStocks: () => void}> = ({closeModal, updateStocks}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    axiosApi.put('/stocks/create', formData)
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
        <Input style={{marginBottom: 20}} name='name' id="name" placeholder='Название' />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='description'>Описание</label>
        <Input style={{marginBottom: 20}} name='description' id="description" placeholder='Описание' />

        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default CreateStockModalContent