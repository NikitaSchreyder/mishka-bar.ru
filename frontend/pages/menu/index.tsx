import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetStaticProps, NextPage } from "next"
import { IMenuIndexPageProps } from '../../src/core/types/menu'

import MenuIndexPage from "@/src/menu/MenuIndexPage"

const MenuPage: NextPage<IMenuIndexPageProps> = (p) => {
    return <MenuIndexPage {...p} />
}

export const getStaticProps: GetStaticProps = async (context) => {
    const categories = await(await axiosApi.get('/menu/categories')).data

    return {
      props: {categories}, // will be passed to the page component as props
    }
}

export default MenuPage