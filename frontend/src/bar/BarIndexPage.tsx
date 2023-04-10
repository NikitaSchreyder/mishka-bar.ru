import Head from 'next/head'
import { IMenuIndexPageProps } from '../core/types/menu'

import Header from "../core/layout/components/header/Header"
import Footer from "../core/layout/components/footer/Footer"
import MenuCategories from '../core/components/Menu/MenuCategories'
import MenuCategoriesItem from '../core/components/Menu/MenuCategoriesItem'
import { Breadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

const BarIndexPage: React.FC<IMenuIndexPageProps> = ({categories}) => {
    const barCategories = categories.map((item, index) => 
        <MenuCategoriesItem 
            key={index} 
            menuType='bar'
            name={item.name}
            searchLink={item.searchLink}
            thumbUrl={item.thumbUrl} 
        />
    )

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Барная карта',
            href: '/bar',
        }
    ]
    
    return (
        <>
            <Head>
                <title>Мишка бар | Барная карта</title>
            </Head>
            <Header />
                <div className="layout_container">
                    <Breadcrumb items={breadcrumbItems} separator='/' />
                </div>
                <div className="layout_container">
                    <MenuCategories>
                        {barCategories}
                    </MenuCategories>                    
                </div>
            <Footer />
        </>
    )
}

export default BarIndexPage