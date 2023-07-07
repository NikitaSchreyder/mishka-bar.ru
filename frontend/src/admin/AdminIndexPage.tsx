import { Menu, MenuProps } from 'antd'
import { IAdminIndexPageProps } from './types/types'
import { useCallback, useEffect, useState } from 'react';
import { HomeOutlined, MailOutlined, PercentageOutlined, ReadOutlined } from '@ant-design/icons';

import AdminMenuDishesPanel from './panels/menu/AdminMenuDishesPanel';
import AdminMenuCategoriesPanel from './panels/menu/AdminMenuCategoriesPanel';
import Link from 'next/link';
import AdminStocksPanel from './panels/stocks/AdminStocksPanel';

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
  }
];



const AdminIndexPage: React.FC = () => {
  const [current, setCurrent] = useState('');
  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

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
      default:
        return null
    }
  }, [current])

  return (
    <div>
      <Menu theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <RenderPanel />
    </div>
  )
}

export default AdminIndexPage