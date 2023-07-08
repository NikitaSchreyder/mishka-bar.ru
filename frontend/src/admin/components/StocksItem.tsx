import { Button, Popconfirm, Popover, message } from 'antd'
import { IDishesItemProps } from '../types/types'
import { axiosApi } from '../../core/api/AxiosApi'
import { getCookie } from '../../core/helpers/cookies'

const StocksItem: React.FC<IDishesItemProps> = ({item, showUpdateModal, updateDishes}) => {
  const {id, name, searchLink, thumbUrl} = item
  const token = getCookie('token')

  const actions = {
    remove() {
      axiosApi(token).delete(`/stocks/remove?id=${id}`)
        .then(data => {
          message.success(data.data.message);
          updateDishes()
        })
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

export default StocksItem