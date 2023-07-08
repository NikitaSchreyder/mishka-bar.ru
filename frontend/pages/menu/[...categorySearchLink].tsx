import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetServerSideProps, NextPage } from "next"
import { IMenuCategoryIndexPageProps } from '../../src/core/types/menu'

import MenuCategoryIndexPage from "@/src/menu/MenuCategoryIndexPage"

const MenuCategoryPage: NextPage<IMenuCategoryIndexPageProps> = (p) => {
    return <MenuCategoryIndexPage {...p} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {categorySearchLink} = ctx.query
    const categoryItems = await(await axiosApi().get(`/menu/dishes/by-category?categorySearchLink=${categorySearchLink}`)).data

    return {
        props: {
            ...categoryItems
        }
    }
}

export default MenuCategoryPage