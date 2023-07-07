import { GetServerSideProps, NextPage } from 'next';

import AdminIndexPage from '../../src/admin/AdminIndexPage';
import { IAdminIndexPageProps } from '../../src/admin/types/types';
import { axiosApi } from '../../src/core/api/AxiosApi';
import AdminLoginPage from '../../src/admin/AdminLoginPage';

const AdminPage: NextPage<IAdminIndexPageProps> = ({isAdmin}) => {
  if(!isAdmin) {
    return <AdminLoginPage />
  }
  return <AdminIndexPage />
}

export default AdminPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      isAdmin: true
    }
  }
}