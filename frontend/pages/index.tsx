import { GetServerSideProps, NextPage } from 'next'
import IndexPage from '../src/home/IndexPage'
import { axiosApi } from '../src/core/api/AxiosApi'
// Найти заглушку
const Home: NextPage<{isDev: boolean}> = ({isDev}) => isDev ? <p>ХУйня заглушка</p> : <IndexPage />

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const isDev = await(await axiosApi().get(`/app/is-dev`)).data

  return {
    props: {
      isDev
    }
  }
}

