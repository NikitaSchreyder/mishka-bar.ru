import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"
import { TMenuItem } from '../types/menu'

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