import Head from 'next/head'
import { useState } from 'react'
import Footer from "../core/layout/components/footer/Footer"
import Header from "../core/layout/components/header/Header"
import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import MenuCategory from '../core/components/Menu/MenuCategory'
import { useModalControl } from '../core/hooks/useModalControl'
import { TStocksItem } from '../core/types/menu'
import { StocksModal } from '../core/modals/AppModals'
import MenuStockItem from '../core/components/Menu/MenuStockItem'

const StocksIndex: React.FC<{stocksItems: {name: string, description: string, thumbUrl: string}[]}> = ({stocksItems}) => {
    const [openedItem, setOpenedItem] = useState<TStocksItem>({
        name: '',
        description: '',
        thumbUrl: '',
    })

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Акции',
            href: '/stocks',
        }
    ]

    const stocksItemModalControll = useModalControl()

    const onItemClick = (item: TStocksItem) => {
        setOpenedItem(item)
        stocksItemModalControll.openModal()
    }

    const closeModal = () => {
        stocksItemModalControll.closeModal()
    }

    const menuCategoryItems = () => {
        return stocksItems.map((item, index) => <MenuStockItem key={index} item={item} onClick={onItemClick} />)
    }

    return (
        <>
            <Head>
                <title>Мишка бар | Акции</title>
            </Head>
            <Header />
            <div className="layout_container">
                <Breadcrumb items={breadcrumbItems} separator='/' />
            </div>
            <div className="layout_container menu-categories_container">
                <StocksModal stocksItem={openedItem} closeModal={closeModal} open={stocksItemModalControll.toShow} />
                <MenuCategory>
                    {menuCategoryItems()}
                </MenuCategory>
            </div>
            <Footer />
        </>
    )
}

export default StocksIndex