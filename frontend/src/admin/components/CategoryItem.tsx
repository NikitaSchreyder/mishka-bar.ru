import { Button, Popconfirm, Popover, message } from 'antd'
import { ICategoryItemProps } from '../types/types'
import { axiosApi } from '../../core/api/AxiosApi'
import { getCookie } from '../../core/helpers/cookies'

const CategoryItem: React.FC<ICategoryItemProps> = ({item, showUpdateModal, updateCategories}) => {
  const {id, name, searchLink, thumbUrl, isHidden} = item
  const token = getCookie('token')

  const actions = {
    toggleHidden() {
      const formData = new FormData()
      formData.append('id', id)
      formData.append('isHidden', !isHidden ? '1' : '0')
      axiosApi(token).put('/menu/categories/update', formData)  
        .then(data => {
          message.success(data.data.message)
          updateCategories()
        })  
        .catch(err => message.error(err.response.data.message))
    },
    remove() {
      axiosApi(token).delete(`/menu/categories/remove?id=${id}`)
        .then(data => {
          message.success(data.data.message);
          updateCategories()
        })
          .catch(err => message.error(err.response.data.message))
    }
  }

  const popoverContent = (
    <div>
      <Popconfirm 
        title={!isHidden ? 'Скрыть' : 'Сделать видимой'}
        description="Вы уверены?"
        onConfirm={actions.toggleHidden}
      >
        <Button danger>{!isHidden ? 'Скрыть' : 'Сделать видимой'}</Button>
      </Popconfirm>
      <Button
        onClick={showUpdateModal}
      >Изменить</Button>
      <Popconfirm 
        title="Удалить"
        description="После удаления категории необходимо изменить категорию блюд которые были в ней, либо удалить их. Вы уверены?"
        onConfirm={actions.remove}
      >
        <Button danger>Удалить</Button>
      </Popconfirm>
    </div>
  )

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 200, gap: 10}}>
      <img src={`http://mishkabar.localhost${thumbUrl}`} width={200} alt="" />
      <p style={{color: 'white'}}>{name}</p>
      <Popover
        trigger={'click'}
        content={popoverContent}
      >
        <Button 
          type='link'
        >Действия</Button>
      </Popover>
    </div>
  )
}

export default CategoryItem