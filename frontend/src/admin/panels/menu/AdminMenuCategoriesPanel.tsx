import { useEffect, useMemo, useState } from 'react'
import CategoryItem from '../../components/CategoryItem'

import axios from 'axios'
import { Button } from 'antd'
import { axiosApi } from '../../../core/api/AxiosApi'

const AdminMenuCategoriesPanel: React.FC = () => {
  const [categories, setCategories] = useState<any[]>()

  useEffect(() => {
    axiosApi.get('menu/categories')
      .then(res => {
        const { data } = res
        setCategories(data)
      })
  }, [])

  const renderCategories = useMemo(() => {
    if(categories?.length) return categories.map(item => <CategoryItem {...item} />)
    return <div style={{color: 'white'}}>Нет категорий </div>
  }, [categories]) 

  return (
    <>
      <div style={{padding: 20}}>
        <Button style={{marginBottom: 20}}>Новая категория</Button>
        {renderCategories}
      </div>
    </>
  )
}

export default AdminMenuCategoriesPanel