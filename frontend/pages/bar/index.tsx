import { axiosApi } from "@/src/core/api/AxiosApi"
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { IMenuIndexPageProps } from '../../src/core/types/menu'

import BarIndexPage from "@/src/bar/BarIndexPage"

const BarPage: NextPage<IMenuIndexPageProps> = (p) => {
    return <BarIndexPage {...p} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const categories = await(await axiosApi.get('/menu/categories')).data

  if(categories) {
    return {
      props: {categories}, // will be passed to the page component as props
    }
  }

  return {
    props: {
      categories: []
    }
  }
}

export default BarPage