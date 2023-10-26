import Head from 'next/head'
import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { useState } from 'react'
// import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import Header from '../core/layout/components/header/Header'
import Footer from '../core/layout/components/footer/Footer'
import "react-image-lightbox/style.css"

const BarIndexPage: React.FC = () => {
    const [index, setIndex] = useState(-1)
    const barImages: any[] = [
        {
            src: `${process.env.publicUrl}img/bar/pdf/min/bar-cock-1.png`,
            original: `${process.env.publicUrl}img/bar/pdf/bar-cock-1.png`,
            width: 300,
            height: 400,
            caption: ''
        },
        {
            src: `${process.env.publicUrl}img/bar/pdf/min/bar-cock-2.png`,
            original: `${process.env.publicUrl}img/bar/pdf/bar-cock-2.png`,
            width: 300,
            height: 400,
            caption: ''
        },
        {
            src: `${process.env.publicUrl}img/bar/pdf/min/bar-cock-3.png`,
            original: `${process.env.publicUrl}img/bar/pdf/bar-cock-3.png`,
            width: 300,
            height: 400,
            caption: ''
        },
        {
            src: `${process.env.publicUrl}img/bar/pdf/min/bar-cock-4.png`,
            original: `${process.env.publicUrl}img/bar/pdf/bar-cock-4.png`,
            width: 300,
            height: 400,
            caption: ''
        },
        {
            src: `${process.env.publicUrl}img/bar/pdf/min/bar-cock-5.png`,
            original: `${process.env.publicUrl}img/bar/pdf/bar-cock-5.png`,
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

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Барная карта',
            href: '/bar',
        }
    ]

    return (
        <>
            <Head>
                <title>Мишка бар | Барная карта</title>
            </Head>
            <Header />
            <div className="layout_container">
                <Breadcrumb items={breadcrumbItems} separator='/' />
            </div>
            <div className="layout_container menu-categories_container">
                <div className='bar-grid'>
                    {barImages.map((item, index) => <div key={index} className='bar-grid-item' onClick={() => handleClick(index)}><img className='bar-grid-item--image' src={item.src} /></div>)}
                </div>
                {/* <Gallery
                    rowHeight={300}
                    images={barImages}
                    onClick={handleClick}
                    enableImageSelection={false}
                    margin={5}
                /> */}
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
                )}
            </div>
            <Footer />
        </>
    )
}

export default BarIndexPage

// import Head from 'next/head'
// import { IMenuIndexPageProps } from '../core/types/menu'

// import Header from "../core/layout/components/header/Header"
// import Footer from "../core/layout/components/footer/Footer"
// import MenuCategories from '../core/components/Menu/MenuCategories'
// import MenuCategoriesItem from '../core/components/Menu/MenuCategoriesItem'
// import { Breadcrumb } from 'antd'
// import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

// const BarIndexPage: React.FC<IMenuIndexPageProps> = ({categories}) => {
//     const barCategories = categories.map((item, index) => 
//         <MenuCategoriesItem 
//             key={index} 
//             menuType='bar'
//             name={item.name}
//             searchLink={item.searchLink}
//             thumbUrl={item.thumbUrl} 
//         />
//     )

//     const breadcrumbItems: ItemType[] = [
//         {
//             title: 'Барная карта',
//             href: '/bar',
//         }
//     ]
    
//     return (
//         <>
//             <Head>
//                 <title>Мишка бар | Барная карта</title>
//             </Head>
//             <Header />
//                 <div className="layout_container">
//                     <Breadcrumb items={breadcrumbItems} separator='/' />
//                 </div>
//                 <div className="layout_container">
//                     <MenuCategories>
//                         {barCategories}
//                     </MenuCategories>                    
//                 </div>
//             <Footer />
//         </>
//     )
// }

// export default BarIndexPage