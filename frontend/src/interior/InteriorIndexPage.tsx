import { useMemo, useState } from "react"
import { Gallery } from "react-grid-gallery"
import { images, CustomImage } from "./images"

import Lightbox from "react-image-lightbox"
import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

import "react-image-lightbox/style.css"

const InteriorIndexPage: React.FC = () => {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    const renderGallery = useMemo(() => {
        return (
            <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
            />
        )
    }, [images])
    
    return (
        <>
            <Header />
            <div className="layout_container">
                {renderGallery}
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