import { Button, Image } from "antd"
import { TStocksItem } from '../../types/menu'
import { CloseOutlined } from "@ant-design/icons"

const StocksModalContent: React.FC<{stocksItem: TStocksItem, onClose: () => void}> = ({stocksItem, onClose}) => {
    return (
        <div className="layout_container">
            <div className="menu-item-modal_content">
                <Image preview={false} className="menu-item-modal_image" alt={stocksItem.name} src={stocksItem.thumbUrl} />
                <div className="menu-item-modal_details">
                    <p className="menu-item-modal_title">{stocksItem.name}</p>
                    <p className="menu-item-modal_description">{stocksItem.description}</p>
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

export default StocksModalContent