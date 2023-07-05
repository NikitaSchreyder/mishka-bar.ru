import { GetServerSideProps, NextPage } from 'next';

import AdminIndexPage from '../../src/admin/AdminIndexPage';
import { IAdminIndexPageProps } from '../../src/admin/types/types';

const AdminPage: NextPage<IAdminIndexPageProps> = (p) => {
  return <AdminIndexPage {...p} />
}

export default AdminPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}