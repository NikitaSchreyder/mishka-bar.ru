import { Image } from "antd"
import { TMenuItem } from '../../types/menu'

const MenuItemModalContent: React.FC<{barItem: TMenuItem | null}> = ({barItem}) => {
    return (
        <div>
            <p style={{color: 'white'}}>{barItem?.name}</p>
            <Image alt={barItem?.name} src={barItem?.thumbUrl} />
            <p style={{color: 'white'}}>{barItem?.description}</p>
            <p style={{color: 'white'}}>{barItem?.price}</p>
        </div>
    )
}

export default MenuItemModalContent