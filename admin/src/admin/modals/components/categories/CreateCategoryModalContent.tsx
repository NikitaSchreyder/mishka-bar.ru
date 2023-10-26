import { Button, Input, message } from 'antd'
import { FormEvent } from 'react'
import { axiosApi } from '../../../../core/api/AxiosApi'
import { getCookie } from '../../../../core/helpers/cookies'

const CreateCategoryModalContent: React.FC<{closeModal: () => void, updateCategories: () => void}> = ({closeModal, updateCategories}) => {
  const token = getCookie('token')
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    axiosApi(token).put('/menu/categories/create', formData)
      .then(data => {
        closeModal()
        message.success(data.data.message)
        updateCategories()
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

        <Button htmlType='submit'>Сохранить</Button>
      </form>
    </div>
  )
}

export default CreateCategoryModalContent