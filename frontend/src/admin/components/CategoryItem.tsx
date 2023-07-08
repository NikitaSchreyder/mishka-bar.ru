import { Button, Popconfirm, Popover, message } from 'antd'
import { ICategoryItemProps } from '../types/types'
import { axiosApi } from '../../core/api/AxiosApi'
import { getCookie } from '../../core/helpers/cookies'

const CategoryItem: React.FC<ICategoryItemProps> = ({item, showUpdateModal, updateCategories}) => {
  const {id, name, searchLink, thumbUrl} = item
  const token = getCookie('token')

  const actions = {
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