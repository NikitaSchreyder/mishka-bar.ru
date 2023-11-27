import { TGallery } from "./types/gallery.types"

const Gallery: React.FC<TGallery> = ({images, onClick}) => {
    const renderImages = images.map((image, index) => <img key={'gallery-preview-' + index} onClick={() => onClick(index)} className="gallery-item" src={image.src} />)
    
    return (
        <div className="gallery">
            {renderImages}
        </div>
    )
}

export default Gallery