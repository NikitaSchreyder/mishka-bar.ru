import { Modal, Spin } from "antd"
import dynamic from "next/dynamic"

const CreateDishModalContent = dynamic(() => 
    import('./components/dishes/CreateDishModalContent'), 
    {
        loading: () => <Spin />
    }
)

const UpdateDishModalContent = dynamic(() => 
    import('./components/dishes/UpdateDishModalContent'), 
    {
        loading: () => <Spin />
    }
)

const CreateCategoryModalContent = dynamic(() => 
    import('./components/categories/CreateCategoryModalContent'), 
    {
        loading: () => <Spin />
    }
)

const UpdateCategoryModalContent = dynamic(() => 
    import('./components/categories/UpdateCategoryModalContent'), 
    {
        loading: () => <Spin />
    }
)

const CreateStockyModalContent = dynamic(() => 
    import('./components/stocks/CreateStockModalContent'), 
    {
        loading: () => <Spin />
    }
)

const UpdateStockModalContent = dynamic(() => 
    import('./components/stocks/UpdateStockModalContent'), 
    {
        loading: () => <Spin />
    }
)

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



export const CreateStockModal: React.FC<{open: boolean, closeModal: () => void, updateStocks: () => void}> = ({open, closeModal, updateStocks}) => {
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
            <CreateStockyModalContent updateStocks={updateStocks} closeModal={closeModal} />
        </Modal>
    )
}

export const UpdateStockModal: React.FC<{open: boolean, closeModal: () => void, updatedItem: any, updateStocks: () => void}> = ({updateStocks, open, closeModal, updatedItem}) => {
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
            <UpdateStockModalContent updateStocks={updateStocks} closeModal={closeModal} updatedItem={updatedItem} />
        </Modal>
    )
  }