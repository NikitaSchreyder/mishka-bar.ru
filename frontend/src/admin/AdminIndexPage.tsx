import { Menu, MenuProps } from 'antd'
import { IAdminIndexPageProps } from './types/types'
import { useCallback, useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';

import AdminMenuDishesPanel from './panels/menu/AdminMenuDishesPanel';
import AdminMenuCategoriesPanel from './panels/menu/AdminMenuCategoriesPanel';

const items: MenuProps['items'] = [
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
  }
];

const AdminIndexPage: React.FC = () => {
  const [current, setCurrent] = useState('menu');
  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

  // useEffect(() => {
  //   document.cookie = "token=John";
  // }, [])

  const RenderPanel = useCallback(() => {
    switch(current) {
      case 'menu-categories':
        return <AdminMenuCategoriesPanel />
      case 'menu-dishes':
        return <AdminMenuDishesPanel />
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