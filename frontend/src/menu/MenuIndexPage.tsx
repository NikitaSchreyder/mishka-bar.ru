
import Header from "../core/layout/components/header/Header";
import Footer from "../core/layout/components/footer/Footer";
import MenuCategories from '../core/components/Menu/MenuCategories';
import MenuCategoriesItem from '../core/components/Menu/MenuCategoriesItem';
import { IMenuIndexPageProps } from '../core/types/menu';
import Head from 'next/head';
import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

const MenuIndexPage: React.FC<IMenuIndexPageProps> = ({categories}) => {
    const menuCategories = categories.map((item, index) => 
        <MenuCategoriesItem 
            key={index} 
            menuType='menu' 
            name={item.name} 
            searchLink={item.searchLink} 
            thumbUrl={item.thumbUrl} 
        />
    )

    const breadcrumbItems: ItemType[] = [
        {
            title: 'Меню',
            href: '/menu'
        }
    ]
    
    return (
        <>
            <Head>
                <title>Мишка бар | меню</title>
            </Head>
            <Header />
                <div className="layout_container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="layout_container">
                    <MenuCategories>
                        {menuCategories}
                    </MenuCategories>
                </div>
            <Footer />
        </>
    )
}

export default MenuIndexPage