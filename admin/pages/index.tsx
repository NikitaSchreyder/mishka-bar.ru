import { GetServerSideProps, NextPage } from 'next';

import AdminIndexPage from '../src/admin/AdminIndexPage';
import { IAdminIndexPageProps } from '../src/admin/types/types';
import { axiosApi } from '../src/core/api/AxiosApi';
import AdminLoginPage from '../src/admin/AdminLoginPage';

const AdminPage: NextPage<IAdminIndexPageProps> = ({isAdmin, isDev}) => {
  if(!isAdmin) {
    return <AdminLoginPage />
  }
  return <AdminIndexPage isDev={isDev} />
}

export default AdminPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = ctx.req.cookies;
  const isDev = await(await axiosApi().get(`/app/is-dev`)).data

  if(!token) {
    return {
      props: {
        isAdmin: false
      }
    }
  }

  const checkToken = await (await axiosApi().post('/admin/check-token', {token})).data

  if(checkToken) {
    return {
      props: {
        isAdmin: true,
        isDev
      }
    }  
  }

  return {
    props: {
      isAdmin: false
    }
  }
}