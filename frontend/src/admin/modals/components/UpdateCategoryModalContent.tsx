import { Button, Input, message } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../../../core/api/AxiosApi'

const UpdateCategoryModalContent: React.FC<{updatedItem: any}> = ({updatedItem}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    formData.append('id', updatedItem.id)
    axiosApi.put('/menu/categories/update', formData)    
      .catch(err => message.error(err.response.data.message))
  }

  return (
    <div style={{padding: 20}}>
      <form onSubmit={onSubmit}>
        <label style={{color: 'white', marginBottom: 10}} htmlFor='photo'>Фото</label>
        <input style={{marginBottom: 20}} type='file' name='photo'  />
        
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" placeholder='Название' />

        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default UpdateCategoryModalContent