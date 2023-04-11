import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetServerSideProps, NextPage } from "next"
import { IMenuIndexPageProps } from '../../src/core/types/menu'

import BarIndexPage from "@/src/bar/BarIndexPage"

const BarPage: NextPage<IMenuIndexPageProps> = (p) => {
    return <BarIndexPage {...p} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const categories = await(await axiosApi.get('/bar/categories')).data
    
    return {
        props: {
            categories
        }
    }
}

export default BarPage