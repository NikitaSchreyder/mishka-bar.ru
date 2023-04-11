import { GetServerSideProps, NextPage } from "next"

import InteriorIndexPage from "@/src/interior/InteriorIndexPage"
import { axiosApi } from "@/src/core/api/AxiosApi"

const InteriorPage: NextPage = () => {
    return <InteriorIndexPage />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const images = await(await axiosApi.get('/interior')).data
    console.log(images);
    
    return {
        props: {
        }
    }
}

export default InteriorPage