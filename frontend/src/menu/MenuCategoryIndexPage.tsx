import Head from 'next/head'
import { useMemo, useState } from "react"
import { useModalControl } from "../core/hooks/useModalControl"
import { IMenuCategoryIndexPageProps, TMenuItem } from '../core/types/menu'

import { MenuItemModal } from "../core/modals/AppModals"
import Header from "../core/layout/components/header/Header"
import Footer from "../core/layout/components/footer/Footer"
import MenuCategory from '../core/components/Menu/MenuCategory'
import MenuCategoryItem from '../core/components/Menu/MenuCategoryItem'
import { Breadcrumb } from 'antd'

const MenuCategoryIndexPage: React.FC<IMenuCategoryIndexPageProps> = ({categoryItems, categoryName}) => {
    const [openedItem, setOpenedItem] = useState<TMenuItem | null>(null)
    const menuItemDtailsModalControll = useModalControl()

    const onItemClick = (item: TMenuItem) => {
        setOpenedItem(item)
        menuItemDtailsModalControll.openModal()
    }

    const closeModal = () => {
        menuItemDtailsModalControll.closeModal()
        setOpenedItem(null)
    }

    const menuCategoryItems = useMemo(() => {
        return categoryItems.map((item, index) => <MenuCategoryItem key={index} item={item} onClick={onItemClick} />)
    }, [categoryItems])

    return (
        <>
            <Head>
                <title>Мишка бар | {categoryName}</title>
            </Head>
            <MenuItemModal barItem={openedItem && openedItem} closeModal={closeModal} open={menuItemDtailsModalControll.toShow} />
            <Header />
                <div className="layout_container">
                    <Breadcrumb separator='/'>
                        <Breadcrumb.Item href='/menu'>
                            <h1 className="menu-title">Меню</h1>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={`/menu/${categoryItems[0].categorySearchLink}`}>
                            <h1 className="menu-title">{categoryName}</h1>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="layout_container">
                    <MenuCategory>
                        {menuCategoryItems}
                    </MenuCategory>
                </div>
            <Footer />
        </>
    )
}

export default MenuCategoryIndexPage