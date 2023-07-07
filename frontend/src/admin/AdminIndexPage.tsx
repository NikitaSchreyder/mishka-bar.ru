import { Menu, MenuProps } from 'antd'
import { IAdminIndexPageProps } from './types/types'
import { useCallback, useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';

import AdminMenuDishesPanel from './panels/menu/AdminMenuDishesPanel';
import AdminMenuCategoriesPanel from './panels/menu/AdminMenuCategoriesPanel';
import Link from 'next/link';
import AdminStocksPanel from './panels/stocks/AdminStocksPanel';

const items: MenuProps['items'] = [
  {
    label: (
      <Link href={'/'}>Сайт</Link>
    ),
    key: 'site'
  },
  {
    label: 'Меню',
    key: 'menu',
    icon: <MailOutlined />,
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
    icon: <MailOutlined />
  }
];

const AdminIndexPage: React.FC = () => {
  const [current, setCurrent] = useState('menu');
  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

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