import { Button, Input } from 'antd'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { axiosApi } from '../../../core/api/AxiosApi'

const CreateDishModalContent: React.FC = () => {
  const [categories, setCategories] = useState<any[]>()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    axiosApi.put('/menu/dishes/create', formData)    
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
        <input style={{marginBottom: 20}} type='file' name='photo'  />
        
        <label style={{color: 'white', marginBottom: 10}} htmlFor='name'>Название</label>
        <Input style={{marginBottom: 20}} name='name' id="name" placeholder='Название' />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Состав</label>
        <Input style={{marginBottom: 20}} name='composition' id="composition" placeholder='Состав' />

        <label style={{color: 'white', marginBottom: 10}} htmlFor='composition'>Цена</label>
        <Input style={{marginBottom: 20}} name='price' id="price" placeholder='Цена' />

        <select name="categorySearchLink" id="">
          {renderCategories}
        </select>
        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default CreateDishModalContent