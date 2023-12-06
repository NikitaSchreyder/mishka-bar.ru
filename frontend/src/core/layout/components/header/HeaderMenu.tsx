import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer, Image } from 'antd'
import { useCallback, useMemo } from 'react'
import { IHeaderMenuItemProps, IHeaderMenuProps } from './data/types'
import HeaderMenuItem from './HeaderMenuItem'
import Link from 'next/link'

const HeaderMenu: React.FC<IHeaderMenuProps> = ({onClose, visible}) => {
  const menuItems: IHeaderMenuItemProps[] = [
    {
      title: 'ГЛАВНАЯ',
      link: '/'
    },
    {
      title: 'МЕНЮ',
      link: '/menu'
    },
    {
      title: 'БАРНАЯ КАРТА',
      link: '/bar'
    },
    {
      title: 'АКЦИИ',
      link: '/stocks'
    },
    {
      title: 'ИНТЕРЬЕР',
      link: '/interior'
    },
    {
      title: 'ДОСТАВКА',
      link: 'https://eda.yandex.ru/surgut/r/miska_1635151764'
    },
    {
      title: 'О НАС',
      link: '/about'
    }
  ]

  const renderMenuItems = () => {
    return menuItems.map((item, index) => <HeaderMenuItem key={index} {...item} />)
  }

  return (
    <Drawer
      className='header-menu'
      bodyStyle={{display: 'flex', flexDirection: 'column', backgroundColor: 'black'}}
      closable={false}
      open={visible}
      placement="left"
      onClose={onClose}
    >
      <div className="header_menu-content">
        <div className="header_menu-control">
          <Button aria-label='закрыть меню' onClick={onClose} className='header_menu-close-btn' icon={<CloseOutlined  />} />
        </div>
        <div className='header_menu-logo-container'>
          <Image alt='logo' className="footer_logo" preview={false} src={`${process.env.publicUrl}img/logo.webp`} />
        </div>
        <nav>
          <ul className='header_menu-items'>
            {renderMenuItems()}
          </ul>
        </nav>
        <div className='header_menu-info'>
          <ul className='header_menu-info_social'>
            <li className='header_menu-info_social-item'>
              <Link target='_blank' style={{background: `url('${process.env.publicUrl}img/icons/vk.svg')`}} className='header_menu-info_social-item_link--vk' href={'https://vk.com/club211107184'}></Link>
            </li>
            <li className='header_menu-info_social-item'>
              <Link target='_blank' style={{background: `url('${process.env.publicUrl}img/icons/tg.svg')`}} className='header_menu-info_social-item_link--tg' href={'https://t.me/mishka_bar_surgut'}></Link>
            </li>
            <li className='header_menu-info_social-item'>
              <Link target='_blank' style={{background: `url('${process.env.publicUrl}img/icons/yandex-food.png')`}} className='header_menu-info_social-item_link--yandex-food' href={'https://eda.yandex.ru/surgut/r/miska_1635151764'}></Link>
            </li>
          </ul>
          <p><span className='header_menu-info--title'>Номер телефона:</span> <a href="tel:79825194242">+7(982)519 42 42</a></p>
          <p><span className='header_menu-info--title'>Время работы:</span> 12:00 - 23:00</p>
          <p><span className='header_menu-info--title'>Адрес:</span> <a target='_blank' href="https://yandex.ru/maps/-/CCU0MRcY8C">г.Сургут, ул.проспект Мира, 26</a></p>
        </div>
      </div>
    </Drawer>
  )
}

export default HeaderMenu