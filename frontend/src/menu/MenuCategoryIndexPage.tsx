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
import { useRouter } from 'next/router'

const MenuCategoryIndexPage: React.FC<IMenuCategoryIndexPageProps> = ({categoryItems, categoryName}) => {
    const [openedItem, setOpenedItem] = useState<TMenuItem>()
    const menuItemDtailsModalControll = useModalControl()
    const router = useRouter()
    const breadcrumbPath =  router.asPath.split('/')[router.asPath.split('/').length - 1]

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
            href: `/menu/${breadcrumbPath}`,
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