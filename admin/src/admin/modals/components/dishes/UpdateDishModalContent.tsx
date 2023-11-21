import { Button, Input, message } from 'antd'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { axiosApi } from '../../../../core/api/AxiosApi';
import { getCookie } from '../../../../core/helpers/cookies';

const UpdateDishModalContent: React.FC<{updatedItem: any, closeModal: () => void, updateDishes: () => void}> = ({updatedItem, closeModal, updateDishes}) => {
  const [categories, setCategories] = useState<any[]>()
  const token = getCookie('token')
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    formData.append('id', updatedItem.id)
    axiosApi(token).put('/menu/dishes/update', formData)   
    .then(data => {
      closeModal()
      message.success(data.data.message)
      updateDishes()
    })  
    .catch(err => message.error(err.response.data.message))
  }

  const renderCategories = useMemo(() => {
    return categories && categories.map((item, index) => (
      <option key={'categories-update-' + index} value={item.searchLink}>{item.name}</option>
    ))
  }, [categories])

  useEffect(() => {
    axiosApi().get('/menu/categories')
      .then(data => setCategories(data.data))
  }, [])

  return (
    <div style={{padding: 20}}>
      <form onSubmit={onSubmit}>
        <label style={{color: 'white', marginBottom: 10}} htmlFor='photo'>Фото</label>
        <input style={{marginBottom: 20}} type='file' name='photo'  />
        
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" defaultValue={updatedItem.name} />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Состав</label>
        <Input style={{marginBottom: 20}} name='composition' id="composition" defaultValue={updatedItem.composition} />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Цена</label>
        <Input style={{marginBottom: 20}} name='price' id="price" defaultValue={updatedItem.price} />

        <select name="categorySearchLink" id="">
          {renderCategories}
        </select>
        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}
UpdateDishModalContent
export default UpdateDishModalContent