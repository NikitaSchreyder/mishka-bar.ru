import Head from 'next/head'
import { Breadcrumb, Image } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

import { IAboutIndexPageProps } from './types/types'

import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

const AboutIndexPage: React.FC<IAboutIndexPageProps> = ({id, description, thumbUrl}) => {
    const mapState: ymaps.IMapState = { center: [61.258612, 73.403110], zoom: 17 }
    const breadcrumbItems: ItemType[] = [
        {
            title: 'О нас',
            href: '/about',
        }
    ]

    return (
        <>
            <Head>
                <title>Мишка бар | О нас</title>
            </Head>
            <Header />
            <div className="layout_container">
                <Breadcrumb items={breadcrumbItems} separator='/' />
                <div className="about-content">
                    <Image alt='Фото зала' className='about-img' preview={false} src={thumbUrl} />
                    <p className="about-description">{description}</p>
                </div>
            </div>
            <div className='about_map-container'>
                <YMaps>
                    <Map className='about_map' state={mapState}>
                        <Placemark geometry={mapState.center} />
                    </Map>
                </YMaps>
            </div>
            <Footer />
        </>
    )
}

export default AboutIndexPage