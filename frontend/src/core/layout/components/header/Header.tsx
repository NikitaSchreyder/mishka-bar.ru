import { useState } from 'react';
import { Button, Image } from 'antd';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const openMenu = () => setMenuVisible(true)
  const closeMenu = () => setMenuVisible(false)

  const address = 'проспект Мира, 26'
  const phone = '+7 (982) 519 42 42'

  return (
    <header className='header'>
      <HeaderMenu onClose={closeMenu} visible={menuVisible} />
      <Button 
        onClick={openMenu}
        className="header_menu-btn"
      />
      <Link href={'/'} className='header_logo-container'>
        <Image preview={false} className='header_logo' src='/img/logo.webp' alt='logo' />
      </Link>
      <div className='header_info'>
        <a href='https://yandex.ru/maps/-/CCU0MRcY8C' className='header_info--address'>{address}</a>
        <a href='tel:79825194242' className='header_info--phone'>{phone}</a>
      </div>
    </header>
  )
}

export default Header;