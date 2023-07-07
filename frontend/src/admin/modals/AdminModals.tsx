import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"

const UpdateDishModalContent = dynamic(() => 
    import('./components/UpdateDishModalContent'), 
    {
        loading: () => <Spin />
    }
)

const CreateDishModalContent = dynamic(() => 
    import('./components/CreateDishModalContent'), 
    {
        loading: () => <Spin />
    }
)

const UpdateCategoryModalContent = dynamic(() => 
    import('./components/UpdateCategoryModalContent'), 
    {
        loading: () => <Spin />
    }
)

const CreateCategoryModalContent = dynamic(() => 
    import('./components/CreateCategoryModalContent'), 
    {
        loading: () => <Spin />
    }
)

export const UpdateDishModal: React.FC<{open: boolean, closeModal: () => void, updatedItem: any, updateDishes: () => void}> = ({open, closeModal, updatedItem, updateDishes}) => {
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
          <UpdateDishModalContent updateDishes={updateDishes} closeModal={closeModal} updatedItem={updatedItem} />
      </Modal>
  )
}

export const CreateDishModal: React.FC<{open: boolean, closeModal: () => void, updateDishes: () => void}> = ({open, closeModal, updateDishes}) => {
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
            <CreateDishModalContent updateDishes={updateDishes} closeModal={closeModal} />
        </Modal>
    )
}

export const UpdateCategoryModal: React.FC<{open: boolean, closeModal: () => void, updatedItem: any, updateCategories: () => void}> = ({updateCategories, open, closeModal, updatedItem}) => {
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
            <UpdateCategoryModalContent updateCategories={updateCategories} closeModal={closeModal} updatedItem={updatedItem} />
        </Modal>
    )
  }

export const CreateCategoryModal: React.FC<{open: boolean, closeModal: () => void, updateCategories: () => void}> = ({open, closeModal, updateCategories}) => {
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
            <CreateCategoryModalContent updateCategories={updateCategories} closeModal={closeModal} />
        </Modal>
    )
}