import Head from 'next/head'
import { Breadcrumb, Image } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

const AboutIndexPage: React.FC = () => {
    const mapState: ymaps.IMapState = { center: [61.258612, 73.403110], zoom: 17 }

    const breadcrumbItems: ItemType[] = [
        {
            title: 'О нас',
            href: '/about',
        }
    ]

    const description = 'Mishka bar - это всегда хорошее настроение и море позитива ежедневно. Mishka bar – ресторан идеально подойдет для делового обеда, семейного ужина, так и для тёплой встречи с друзьями и подругами. Мы дарим гостям хорошее настроение, которое передаём через наши невероятно вкусные блюда и напитки, весёлое и дружелюбное обслуживание и демократичные цены. Именно поэтому в Mishka bar комфортно всем.'

    return (
        <>
            <Head>
                <title>Мишка бар | О нас</title>
            </Head>
            <Header />
            <div className="layout_container">
                <Breadcrumb items={breadcrumbItems} separator='/' />
                <div className="about-content">
                    <Image className='about-img' preview={false} src='/public/img/hall/mishkabar-12.jpg' />
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