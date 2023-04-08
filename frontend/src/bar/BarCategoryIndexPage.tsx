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
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

const BarCategoryIndexPage: React.FC<IMenuCategoryIndexPageProps> = ({categoryItems, categoryName}) => {
    const [openedItem, setOpenedItem] = useState<TMenuItem | null>(null)
    const barItemDtailsModalControl = useModalControl()

    const onItemClick = (item: TMenuItem) => {
        setOpenedItem(item)
        barItemDtailsModalControl.openModal()
    }

    const closeModal = () => {
        setOpenedItem(null)
        barItemDtailsModalControl.closeModal()
    }

    const barCategoryItems = useMemo(() => {
        return categoryItems.map((item, index) => <MenuCategoryItem key={index} item={item} onClick={onItemClick} />)
    }, [categoryItems])

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Барная карта',
            href: '/bar',
            separator: '/'  
        },
        {
            title: categoryName,
            href: `/bar/${categoryItems[0].categorySearchLink}`,
            separator: '/'  
        }
    ]

    return (
        <>
            <Head>
                <title>Мишка бар | {categoryName}</title>
            </Head>
            <MenuItemModal barItem={openedItem && openedItem} closeModal={closeModal} open={barItemDtailsModalControl.toShow} />
            <Header />
                <div className="layout_container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="layout_container">
                    <MenuCategory>
                        {barCategoryItems}
                    </MenuCategory>
                </div>
            <Footer />
        </>
    )
}

export default BarCategoryIndexPage