import Head from 'next/head'
import { useState } from "react"
import { useModalControl } from "../core/hooks/useModalControl"
import { IMenuCategoryIndexPageProps, TMenuItem } from '../core/types/menu'

import { MenuItemModal } from "../core/modals/AppModals"
import Header from "../core/layout/components/header/Header"
import Footer from "../core/layout/components/footer/Footer"
import MenuCategory from '../core/components/Menu/MenuCategory'
import MenuCategoryItem from '../core/components/Menu/MenuCategoryItem'
import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

const MenuCategoryIndexPage: React.FC<IMenuCategoryIndexPageProps> = ({categoryItems, categoryName}) => {
    const [openedItem, setOpenedItem] = useState<TMenuItem>()
    const menuItemDtailsModalControll = useModalControl()

    const onItemClick = (item: TMenuItem) => {
        setOpenedItem(item)
        menuItemDtailsModalControll.openModal()
    }

    const closeModal = () => {
        menuItemDtailsModalControll.closeModal()
    }

    const menuCategoryItems = () => {
        return categoryItems.map(item => <MenuCategoryItem key={item.id} item={item} onClick={onItemClick} />)
    }

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Меню',
            href: '/menu',
            separator: '/'  
        },
        {
            title: categoryName,
            href: `/menu/${categoryItems[0].categorySearchLink}`,
            separator: '/'  
        }
    ]

    return (
        <>
            <Head>
                <title>Мишка бар | {categoryName}</title>
            </Head>
            {openedItem && <MenuItemModal menuItem={openedItem} closeModal={closeModal} open={menuItemDtailsModalControll.toShow} />}
            <Header />
                <div className="layout_container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="layout_container menu-categories_container">
                    <MenuCategory>
                        {menuCategoryItems()}
                    </MenuCategory>
                </div>
            <Footer />
        </>
    )
}

export default MenuCategoryIndexPage