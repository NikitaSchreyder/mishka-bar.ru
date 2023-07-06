import { Button, Popconfirm, Popover, message } from 'antd'
import { IDishesItemProps } from '../types/types'
import axios from 'axios'
import { useRouter } from 'next/router'

const DishesItem: React.FC<IDishesItemProps> = ({item, showUpdateModal}) => {
  const {id, name, searchLink, thumbUrl} = item
  const router = useRouter()

  const actions = {
    update() {},
    remove() {
      axios.delete(`http://mishkabar.localhost/api/menu/dishes/remove?id=${id}`)
        .then(() => router.reload())
          .catch(err => message.error(err.response.data.message))
    }
  }

  const popoverContent = (
    <div>
      <Button
        onClick={showUpdateModal}
      >
        Изменить
      </Button>
      <Popconfirm 
        title="Удалить"
        description="Вы уверены?"
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

export default DishesItem