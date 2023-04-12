import Head from 'next/head'
import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"

const BusinessLunchIndexPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Мишка бар | Бизнес ланч</title>
            </Head>
            <Header />
            <div className="layout_container">
                <h1 style={{color: 'white'}}>AYE</h1>
            </div>
            <Footer />
        </>
    )
}

export default BusinessLunchIndexPage