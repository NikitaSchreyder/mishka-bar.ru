import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"

const UpdateDishModalContent = dynamic(() => 
    import('./components/UpdateDishModalContent'), 
    {
        loading: () => <Spin />
    }
)

export const UpdateDishModal: React.FC<{open: boolean, closeModal: () => void, updatedItem: any}> = ({open, closeModal, updatedItem}) => {
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
          <UpdateDishModalContent updatedItem={updatedItem} />
      </Modal>
  )
}