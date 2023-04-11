import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Head from 'next/head'

import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

const AboutIndexPage: React.FC = () => {
    const mapState: ymaps.IMapState = { center: [61.258612, 73.403110], zoom: 17 }
    return (
        <>
            <Head>
                <title>Мишка бар | О нас</title>
            </Head>
            <Header />
            <div className="layout-container"></div>
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