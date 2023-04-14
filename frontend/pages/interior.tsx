import { GetServerSideProps, NextPage } from "next"
import { axiosApi } from '../src/core/api/AxiosApi'

import InteriorIndexPage from "@/src/interior/InteriorIndexPage"

const InteriorPage: NextPage<{interiorImages: any}> = ({interiorImages}) => {
    return <InteriorIndexPage interiorImages={interiorImages} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const interiorImages = await(await axiosApi.get('/interior')).data
    
    return {
        props: {
            interiorImages
        }
    }
}

export default InteriorPage