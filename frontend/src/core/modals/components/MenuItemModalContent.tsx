import { Button, Image } from "antd"
import { TMenuItem } from '../../types/menu'
import { CloseOutlined } from "@ant-design/icons"

const MenuItemModalContent: React.FC<{menuItem: TMenuItem, onClose: () => void}> = ({menuItem, onClose}) => {
    console.log(menuItem)
    const composition = () => {
        return menuItem.composition.length > 0 && (
            <p className="menu-item-modal_description">Состав: {menuItem.composition.join(', ').toLowerCase()}</p>
        )
    } 
    return (
        <div className="layout_container">
            <div className="menu-item-modal_content">
                <Image preview={false} className="menu-item-modal_image" alt={menuItem.name} src={menuItem.thumbUrl} />
                <div className="menu-item-modal_details">
                    <p className="menu-item-modal_title">{menuItem.name}</p>
                    <p className="menu-item-modal_price">{menuItem.price}&#x20bd;</p>
                    {composition()}
                </div>
                <Button 
                    onClick={onClose}
                    className="menu-item-modal_close" 
                    icon={<CloseOutlined className="menu-item-modal_close-icon" />}
                ></Button>
            </div>
        </div>
    )
}

export default MenuItemModalContent