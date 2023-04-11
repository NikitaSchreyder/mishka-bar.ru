import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetServerSideProps, NextPage } from "next"
import { IMenuIndexPageProps } from '../../src/core/types/menu'

import MenuIndexPage from "@/src/menu/MenuIndexPage"

const MenuPage: NextPage<IMenuIndexPageProps> = (p) => {
    return <MenuIndexPage {...p} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const categories = await(await axiosApi.get('/menu/categories')).data
    
    return {
        props: {
            categories
        }
    }
}

export default MenuPage