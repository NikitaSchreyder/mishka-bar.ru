import Head from 'next/head'
import { useState } from 'react'
import Lightbox from "react-image-lightbox"
import { Gallery } from "react-grid-gallery"

import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"
import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import "react-image-lightbox/style.css"
import MenuCategory from '../core/components/Menu/MenuCategory'
import MenuCategoryItem from '../core/components/Menu/MenuCategoryItem'
import { useModalControl } from '../core/hooks/useModalControl'
import { TMenuItem } from '../core/types/menu'
import { MenuItemModal } from '../core/modals/AppModals'

const StocksIndex: React.FC = () => {
    const [index, setIndex] = useState(-1)
    const barImages: any[] = [
        {
            src: '/public/img/stocks/stock-1-min.jpg',
            original: '/public/img/stocks/stock-1.jpg',
            width: 600,
            height: 400,
            caption: ''
        },
        {
            src: '/public/img/stocks/stock-2-min.jpg',
            original: '/public/img/stocks/stock-2.jpg',
            width: 300,
            height: 400,
            caption: ''
        }
    ]

    const currentImage = barImages[index]
    const nextIndex = (index + 1) % barImages.length
    const nextImage = barImages[nextIndex] || currentImage
    const prevIndex = (index + barImages.length - 1) % barImages.length
    const prevImage = barImages[prevIndex] || currentImage

    const handleClose = () => setIndex(-1)
    const handleMovePrev = () => setIndex(prevIndex)
    const handleMoveNext = () => setIndex(nextIndex)
    const handleClick = (index: number) => setIndex(index)

    const renderGallery = () => {
        return (
            <Gallery
                rowHeight={300}
                images={barImages}
                onClick={handleClick}
                enableImageSelection={false}
                margin={5}
            />
        )
    }

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Акции',
            href: '/stocks',
        }
    ]

    const [openedItem, setOpenedItem] = useState<TMenuItem | null>(null)
    const menuItemDtailsModalControll = useModalControl()

    const onItemClick = (item: TMenuItem) => {
        setOpenedItem(item)
        menuItemDtailsModalControll.openModal()
    }

    const closeModal = () => {
        menuItemDtailsModalControll.closeModal()
        setOpenedItem(null)
    }

    const stocksItems = [
        {
            name: 'Скидка 20%',
            description: 'Скидка действует с понедельника по четверг весь день и в пятницу до 17:00',
            thumbUrl: '/public/img/stocks/stock-1.jpg',
            price: ''
        },
        {
            name: 'Martini Fiero tonic',
            description: 'Специальное предложение от Bacrdi Martini 2 + 1',
            thumbUrl: '/public/img/stocks/stock-2.jpg',
            price: ''
        }
    ]

    const menuCategoryItems = () => {
        return stocksItems.map((item, index) => <MenuCategoryItem key={index} item={item} onClick={onItemClick} />)
    }


    return (
        <>
            <Head>
                <title>Мишка бар | Акции</title>
            </Head>
            <Header />
            <div className="layout_container">
                <Breadcrumb items={breadcrumbItems} separator='/' />
            </div>
            <div className="layout_container">
                <MenuItemModal barItem={openedItem && openedItem} closeModal={closeModal} open={menuItemDtailsModalControll.toShow} />
                <MenuCategory>
                    {menuCategoryItems()}
                </MenuCategory>
                {/* {renderGallery()}
                {!!currentImage && (
                    <Lightbox
                        enableZoom={true}
                        mainSrc={currentImage.original}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.original}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.original}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )} */}
            </div>
            <Footer />
        </>
    )
}

export default StocksIndex