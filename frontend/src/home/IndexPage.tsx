import Head from 'next/head'
import { Button } from 'antd'
import { useRouter } from 'next/router';
import { useModalControl } from '../core/hooks/useModalControl';

import { PickupModal } from '../core/modals/AppModals';
import Footer from '../core/layout/components/footer/Footer'
import Header from '../core/layout/components/header/Header'

const IndexPage: React.FC = () => {
  const pickupModalControl = useModalControl();
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Мишка бар</title>
      </Head>
      <div className='app'>
        <PickupModal open={pickupModalControl.toShow} closeModal={pickupModalControl.closeModal} />
        <section className='home'>
          <Header />
          <div className='layout_container'>
            <div className='home_btns'>
              <Button onClick={() => router.replace('/menu')} className='home_btn'>меню</Button>
              <Button className='home_btn' onClick={pickupModalControl.openModal}>самовывоз</Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage