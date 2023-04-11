import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetServerSideProps, NextPage } from "next"
import { IMenuCategoryIndexPageProps } from '../../src/core/types/menu'

import BarCategoryIndexPage from "@/src/bar/BarCategoryIndexPage"

const BarCategoryPage: NextPage<IMenuCategoryIndexPageProps> = (p) => {
    return <BarCategoryIndexPage {...p} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {categorySearchLink} = ctx.query
    const categoryItems = await(await axiosApi.get(`/bar/category-items?categorySearchLink=${categorySearchLink}`)).data
    
    return {
        props: {
            ...categoryItems
        }
    }
}

export default BarCategoryPage