import { Button, Menu, MenuProps } from 'antd'
import { useCallback, useEffect, useState } from 'react';
import { HomeOutlined, PercentageOutlined, PictureOutlined, QuestionOutlined, ReadOutlined } from '@ant-design/icons';

import AdminMenuDishesPanel from './panels/menu/AdminMenuDishesPanel';
import AdminMenuCategoriesPanel from './panels/menu/AdminMenuCategoriesPanel';
import Link from 'next/link';
import AdminStocksPanel from './panels/stocks/AdminStocksPanel';
import AdminAboutPanel from './panels/about/AdminAboutPanel';
import { axiosApi } from '../core/api/AxiosApi';
import { useRouter } from 'next/router';

const items: MenuProps['items'] = [
  {
    label: (
      <Link href={'/'}>Сайт</Link>
    ),
    key: 'site',
    icon: <HomeOutlined />
  },
  {
    label: 'Меню',
    key: 'menu',
    icon: <ReadOutlined />,
    children: [
      {
        label: "Категории",
        key: 'menu-categories',
      },
      {
        label: "Блюда",
        key: 'menu-dishes'
      }
    ]
  },
  {
    label: 'Акции',
    key: 'stocks',
    icon: <PercentageOutlined />
  },
  {
    label: 'Интерьер',
    key: 'interior',
    icon: <PictureOutlined />
  },
  {
    label: 'О нас',
    key: 'about',
    icon: <QuestionOutlined />
  }
];



const AdminIndexPage: React.FC<{isDev: boolean}> = ({isDev}) => {
  const router = useRouter()
  const [current, setCurrent] = useState('');
  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

  const enableDevStatus = async () => {
    await axiosApi().put('/app/is-dev/change', {status: true})
      .then(() => router.reload())
  }

  const disableDevStatus = async () => {
    await axiosApi().put('/app/is-dev/change', {status: false})
      .then(() => router.reload())
  }
  
  useEffect(() => {
    if(current.length === 0) {
      setCurrent('menu-categories')
    }
  }, [])

  const RenderPanel = useCallback(() => {
    switch(current) {
      case 'menu-categories':
        return <AdminMenuCategoriesPanel />
      case 'menu-dishes':
        return <AdminMenuDishesPanel />
      case 'stocks':
        return <AdminStocksPanel />
      case 'about':
        return <AdminAboutPanel />
      default:
        return null
    }
  }, [current])

  return (
    <div>
      <Menu theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <p style={{color: 'white'}}>Статус сайта: {isDev ? 'Разработка' : 'Прод'} <Button onClick={isDev ? disableDevStatus : enableDevStatus}>{isDev ? 'Вкл прод' : 'Выкл прод'}</Button></p>
      <RenderPanel />
    </div>
  )
}

export default AdminIndexPage