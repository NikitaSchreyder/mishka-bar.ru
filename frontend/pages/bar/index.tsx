import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetStaticProps, NextPage } from "next"
import { IMenuIndexPageProps } from '../../src/core/types/menu'

import BarIndexPage from "@/src/bar/BarIndexPage"

const BarPage: NextPage<IMenuIndexPageProps> = (p) => {
    return <BarIndexPage {...p} />
}

export const getStaticProps: GetStaticProps = async (context) => {
    const categories = await(await axiosApi.get('/bar/categories')).data

    return {
      props: {categories}, // will be passed to the page component as props
    }
}

export default BarPage