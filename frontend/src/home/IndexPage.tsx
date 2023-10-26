import Head from 'next/head'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { useModalControl } from '../core/hooks/useModalControl'

import { PickupModal } from '../core/modals/AppModals'
import Footer from '../core/layout/components/footer/Footer'
import Header from '../core/layout/components/header/Header'

const IndexPage: React.FC = () => {
  const pickupModalControl = useModalControl()
  const router = useRouter()
  const YANDEX_FOOD_LINK = 'https://eda.yandex.ru/surgut/r/miska_1635151764'

  const homeStyles = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 1)), url("' + process.env.publicUrl + 'img/hall/mishkabar-10.jpg")'
  }

  return (
    <>
      <Head>
        <title>Мишка бар</title>
      </Head>
      <div className='app'>
        <PickupModal open={pickupModalControl.toShow} closeModal={pickupModalControl.closeModal} />
        <section className='home' style={homeStyles} >
          <Header />
          <div className='layout_container'>
            <div className='home_btns'>
              <Button aria-label='меню ресторана' onClick={() => router.replace('/menu')} className='home_btn'>меню</Button>
              <Button aria-label='самовывоз' className='home_btn' onClick={() => router.replace(YANDEX_FOOD_LINK)}>Доставка</Button>
              {/* <Button aria-label='самовывоз' className='home_btn' onClick={pickupModalControl.openModal}>самовывоз</Button> */}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
