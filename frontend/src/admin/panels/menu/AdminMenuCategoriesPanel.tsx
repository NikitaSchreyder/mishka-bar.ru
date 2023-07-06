import { useEffect, useMemo, useState } from 'react'
import CategoryItem from '../../components/CategoryItem'

import axios from 'axios'
import { Button } from 'antd'

const AdminMenuCategoriesPanel: React.FC = () => {
  const [categories, setCategories] = useState<any[]>()

  useEffect(() => {
    axios.get('http://mishkabar.localhost/api/menu/categories')
      .then(res => {
        const { data } = res
        setCategories(data)
      })
  }, [])

  const renderCategories = useMemo(() => {
    if(categories?.length) return categories.map(item => <CategoryItem {...item} />)
    return <div style={{color: 'white'}}>Нет категорий </div>
  },[categories]) 

  return (
    <>
      <Button>Новая категория</Button>
      {renderCategories}
    </>
  )
}

export default AdminMenuCategoriesPanel