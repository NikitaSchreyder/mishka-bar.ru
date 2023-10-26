import { GetServerSideProps, NextPage } from 'next'
import IndexPage from '../src/home/IndexPage'
import { axiosApi } from '../src/core/api/AxiosApi'
import Development from '@/src/home/Development'

const Home: NextPage<{isDev: boolean}> = ({isDev}) => isDev ? <Development /> : <IndexPage />
export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const isDev = await(await axiosApi().get(`/app/is-dev`)).data

  return {
    props: {
      isDev
    }
  }
}