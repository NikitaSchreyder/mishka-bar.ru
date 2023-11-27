export type TGalleryImage = {
    src: string,
    original: string,
    width: number,
    height: number,
    caption: string,
    order: number
}

export type TGallery = {
    images: TGalleryImage[],
    onClick: (index: number) => void
}