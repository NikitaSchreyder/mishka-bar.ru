import { Button, Image } from "antd"
import { TMenuItem } from '../../types/menu'
import { CloseOutlined } from "@ant-design/icons"

const MenuItemModalContent: React.FC<{barItem: TMenuItem | null, onClose: () => void}> = ({barItem, onClose}) => {
    return (
        <div className="layout_container">
            <div className="menu-item-modal_content">
                <Image preview={false} className="menu-item-modal_image" alt={barItem?.name} src={barItem?.thumbUrl} />
                <div className="menu-item-modal_details">
                    <p className="menu-item-modal_title">{barItem?.name}</p>
                    {barItem?.description && barItem?.description.length > 0 && <p className="menu-item-modal_description">{barItem?.description}</p>}
                    {barItem?.price && barItem?.price.toString().length > 0 && <p className="menu-item-modal_price">{barItem?.price}&#x20bd;</p>}
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