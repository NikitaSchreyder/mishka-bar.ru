import Head from 'next/head'
import { useState } from "react"
import { CustomImage } from "./images"
import { Gallery } from "react-grid-gallery"

import Lightbox from "react-image-lightbox"
import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

import "react-image-lightbox/style.css"

const InteriorIndexPage: React.FC<{interiorImages: any}> = ({interiorImages}) => {
    const [index, setIndex] = useState(-1)

    const currentImage = interiorImages[index]
    const nextIndex = (index + 1) % interiorImages.length
    const nextImage = interiorImages[nextIndex] || currentImage
    const prevIndex = (index + interiorImages.length - 1) % interiorImages.length
    const prevImage = interiorImages[prevIndex] || currentImage

    const handleClose = () => setIndex(-1)
    const handleMovePrev = () => setIndex(prevIndex)
    const handleMoveNext = () => setIndex(nextIndex)
    const handleClick = (index: number, item: CustomImage) => setIndex(index)

    const renderGallery = () => {
        return (
            <Gallery
                images={interiorImages}
                onClick={handleClick}
                enableImageSelection={false}
            />
        )
    }
    
    return (
        <>
            <Head>
                <title>Мишка бар | Интерьер</title>
            </Head>
            <Header />
            <div className="layout_container">
                {renderGallery()}
                {!!currentImage && (
                    <Lightbox
                        enableZoom={false}
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
                )}
            </div>
            <Footer />
        </>
    )
}

export default InteriorIndexPage