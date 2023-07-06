import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"

const UpdateCategoryModalContent = dynamic(() => 
    import('./components/UpdateCategoryModal'), 
    {
        loading: () => <Spin />
    }
)

export const UpdateCategoryModal: React.FC<{open: boolean, closeModal: () => void, updatedItem: any}> = ({open, closeModal, updatedItem}) => {
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
          <UpdateCategoryModalContent updatedItem={updatedItem} />
      </Modal>
  )
}