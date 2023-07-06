import { Button, Input, Upload } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../../../core/api/AxiosApi'

const UpdateDishModalContent: React.FC<{updatedItem: any}> = ({updatedItem}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)

    formData.append('id', updatedItem.id)
    formData.append('categorySearchLink', updatedItem.categorySearchLink as string)
    
    axiosApi.put('/menu/dishes/update', formData)    
  }

  return (
    <div style={{padding: 20}}>
      <form onSubmit={onSubmit}>
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" defaultValue={updatedItem.name} />
        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}
UpdateDishModalContent
export default UpdateDishModalContent