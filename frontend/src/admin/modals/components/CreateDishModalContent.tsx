import { Button, Input, message } from 'antd'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { axiosApi } from '../../../core/api/AxiosApi'
import { useRouter } from 'next/router'

const CreateDishModalContent: React.FC<{closeModal: () => void, updateDishes: () => void}> = ({closeModal, updateDishes}) => {
  const [categories, setCategories] = useState<any[]>()
  const router = useRouter()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    axiosApi.put('/menu/dishes/create', formData)  
    .then(data => {
      closeModal()
      message.success(data.data.message)
      updateDishes()
    })  
    .catch(err => message.error(err.response.data.message))
  }

  const renderCategories = useMemo(() => {
    return categories && categories.map(item => (
      <option value={item.searchLink}>{item.name}</option>
    ))
  }, [categories])

  useEffect(() => {
    axiosApi.get('/menu/categories')
      .then(data => setCategories(data.data))
  }, [])

  return (
    <div style={{padding: 20}}>
      <form onSubmit={onSubmit}>
        <label style={{color: 'white', marginBottom: 10}} htmlFor='photo'>Фото</label>
        <input style={{marginBottom: 20}} type='file' name='photo' required/>
        
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" placeholder='Название' required/>

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Состав</label>
        <Input style={{marginBottom: 20}} name='composition' id="composition" placeholder='Состав' required/>

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Цена</label>
        <Input style={{marginBottom: 20}} name='price' id="price" placeholder='Цена' required/>

        <select name="categorySearchLink" id="" required>
          {renderCategories}
        </select>
        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default CreateDishModalContent