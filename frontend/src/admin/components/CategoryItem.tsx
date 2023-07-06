import { Button, Popconfirm, Popover, message } from 'antd'
import { ICategoryItemProps } from '../types/types'
import { MoreOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

const CategoryItem: React.FC<ICategoryItemProps> = (p) => {
  const {id, name, searchLink, thumbUrl} = p
  const router = useRouter()

  const actions = {
    update() {},
    remove() {
      axios.delete(`http://mishkabar.localhost/api/menu/categories/remove?id=${id}`)
        .then(() => router.reload())
          .catch(err => message.error(err.response.data.message))
    }
  }

  const popoverContent = (
    <div>
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
    <div>
      <p style={{color: 'white'}}>{id}</p>
      <p style={{color: 'white'}}>{name}</p>
      <p style={{color: 'white'}}>{searchLink}</p>
      <img src={`http://mishkabar.localhost${thumbUrl}`} width={200} alt="" />
      <Popover
        trigger={'click'}
        content={popoverContent}
      >
        <Button 
          icon={<MoreOutlined />} 
        />
      </Popover>
    </div>
  )
}

export default CategoryItem