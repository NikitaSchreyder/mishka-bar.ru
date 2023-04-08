import { Image } from "antd"
import { TMenuItem } from '../../types/menu'

const MenuItemModalContent: React.FC<{barItem: TMenuItem | null}> = ({barItem}) => {
    return (
        <div className="layout_container">
            <div className="menu-item-modal_content">
                <Image preview={false} className="menu-item-modal_image" alt={barItem?.name} src={barItem?.thumbUrl} />
                <div className="menu-item-modal_details">
                    <p className="menu-item-modal_title">{barItem?.name}</p>
                    <p className="menu-item-modal_description">{barItem?.description}</p>
                    <p className="menu-item-modal_price">{barItem?.price}&#x20bd;</p>
                </div>
            </div>
        </div>
    )
}

export default MenuItemModalContent