import Link from 'next/link'
import { IHeaderMenuItemProps } from './data/types'

const HeaderMenuItem: React.FC<IHeaderMenuItemProps> = ({link, title}) => {
  return (
    <li className='header_menu-item'>
      <Link className='header_menu-item--link' href={link}>{title}</Link>
    </li>
  )
}

export default HeaderMenuItem