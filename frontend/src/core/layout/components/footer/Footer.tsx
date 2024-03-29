import Link from "next/link"
import { Image } from "antd"

const Footer: React.FC = () => {
  const socialLinks = [
    {
      title: 'vk',
      link: 'https://vk.com/club211107184',
      bg: `${process.env.publicUrl}img/icons/vk.svg`
    },
    {
      title: 'telegram',
      link: 'https://t.me/mishka_bar_surgut',
      bg: `${process.env.publicUrl}img/icons/tg.svg`
    },
    {
      title: 'yandex-food',
      link: 'https://eda.yandex.ru/surgut/r/miska_1635151764',
      bg: `${process.env.publicUrl}img/icons/yandex-food.png`
    }
  ]

  const renderSocialLinks = () => {
    return socialLinks.map((item, index) => {
      return (
        <li className="footer_social-item" key={index}>
          <Link target='_blank' style={{background: `url("${item.bg}")`}} className={`footer_social-item--${item.title}`} href={item.link}></Link>
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
      value: '12:00 - 23:00'
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
      title: 'ДОСТАВКА',
      link: 'https://eda.yandex.ru/surgut/r/miska_1635151764'
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
            <Image alt='logo' className="footer_logo" preview={false} src={`${process.env.publicUrl}img/logo.webp`} />
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
        <div className='footer_developer'>
          <p className='footer_developer-content' >Разработка сайта: <a className='footer_developer-content--link' href="mailto: nikitaschreyder@gmail.com">nikitaschreyder@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer