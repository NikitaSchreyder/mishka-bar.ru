import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"
import { TMenuItem, TStocksItem } from '../types/menu'
import StocksModalContent from './components/StocksModalContent'

const PickupModalContent = dynamic(() => 
    import('./components/PickupModalContent'), 
    {
        loading: () => <Spin />
    }
)

const MenuItemModalContent = dynamic(() => 
    import('./components/MenuItemModalContent'), 
    {
        loading: () => <Spin />
    }
)
export const PickupModal: React.FC<{open: boolean, closeModal: () => void}> = ({open, closeModal}) => {
    return (
        <Modal
            wrapClassName="modal-bg"
            open={open}
            closable={false}
            className="pickup-modal"
            footer={null}
            destroyOnClose={true}
            onCancel={closeModal}
        >
            <PickupModalContent />
        </Modal>
    )
}


export const MenuItemModal: React.FC<{open: boolean, closeModal: () => void, menuItem: TMenuItem}> = ({open, closeModal, menuItem}) => {
    return (
        <Modal
            wrapClassName="modal-bg"
            open={open}
            closable={false}
            className="menu-item-modal"
            footer={null}
            destroyOnClose={true}
            onCancel={closeModal}
        >
            <MenuItemModalContent onClose={closeModal} menuItem={menuItem} />
        </Modal>
    )
}

export const StocksModal: React.FC<{open: boolean, closeModal: () => void, stocksItem: TStocksItem}> = ({open, closeModal, stocksItem}) => {
    return (
        <Modal
            wrapClassName="modal-bg"
            open={open}
            closable={false}
            className="menu-item-modal"
            footer={null}
            destroyOnClose={true}
            onCancel={closeModal}
        >
            <StocksModalContent onClose={closeModal} stocksItem={stocksItem} />
        </Modal>
    )
}