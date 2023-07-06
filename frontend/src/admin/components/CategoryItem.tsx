import { Button, Popconfirm, Popover, message } from 'antd'
import { ICategoryItemProps } from '../types/types'
import { MoreOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

const CategoryItem: React.FC<ICategoryItemProps> = ({item, showUpdateModal}) => {
  const {id, name, searchLink, thumbUrl} = item
  const router = useRouter()

  const actions = {
    remove() {
      axios.delete(`http://mishkabar.localhost/api/menu/categories/remove?id=${id}`)
        .then(() => router.reload())
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
    <div style={{display: 'flex', flexDirection: 'column', maxWidth: 200, gap: 10}}>
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