import Link from "next/link"
import { Image } from "antd"
import { useCallback, useMemo } from "react"

const Footer: React.FC = () => {
  const socialLinks = [
    {
      title: 'vk',
      link: 'https://vk.com/club211107184'
    },
    {
      title: 'telegram',
      link: 'https://t.me/mishka_bar_surgut'
    }
  ]

  const renderSocialLinks = () => {
    return socialLinks.map((item, index) => {
      return (
        <li className="footer_social-item" key={index}>
          <Link target='_blank' className={`footer_social-item--${item.title}`} href={item.link}></Link>
        </li>
      )
    })
  }

  const infoItems = [
    {
      type: 'address',
      title: 'Адрес',
      value: 'ПРОСПЕКТ МИРА, 26',
      link: 'https://yandex.ru/maps/-/CCU0MRcY8C'
    },
    {
      type: 'phone',
      title: 'Номер телефона',
      value: '+7 (982) 519 42 42',
      link: 'tel:79825194242'
    },
    {
      type: 'text',
      title: 'Время работы',
      value: '12:00 - 00:00'
    }
  ]

  const renderInfoItems = () => {
    return infoItems.map((item, index) => {
      return (
        <div className="footer_info-item" key={index}>
          <p className="footer_info-item_title">{item.title}</p>
          {item.type === 'phone' || item.type === 'address' ? <a className="footer_info-item_value" href={`${item.link}`}>{item.value}</a> : (
            <p className="footer_info-item_value">{item.value}</p>
          )}
        </div>
      )
    })
  }

  const menuItems = [
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
    // {
    //   title: 'БИНЕС ЛАНЧ',
    //   link: '/business-lunch'
    // },
    {
      title: 'ИНТЕРЬЕР',
      link: '/interior'
    },
    {
      title: 'О НАС',
      link: '/about'
    }
  ]

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      return (
        <li className="footer_menu-item" key={index}>
          <Link className="footer_menu-item--link" href={item.link}>{item.title}</Link>
        </li>
      )
    })
  }

  return (
    <footer className='footer'>
      <div className='layout_container'>
        <div className="footer_promo">
          <div className='footer_logo-container'>
            <Image alt='logo' className="footer_logo" preview={false} src="/img/logo.webp" />
          </div>
          <ul className="footer_social">
            {renderSocialLinks()}
          </ul>
        </div>
        <div className="footer_content">
          <ul className="footer_menu">
            {renderMenuItems()}
          </ul>
          <div className="footer_info">
            {renderInfoItems()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer