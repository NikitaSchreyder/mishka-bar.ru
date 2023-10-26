import { useState } from "react"

export const useModalControl = () => {
    const [toShow, setToShow] = useState<boolean>(false)
    const openModal = () => setToShow(true)
    const closeModal = () => setToShow(false)

    return {
        toShow,
        openModal,
        closeModal
    }
}