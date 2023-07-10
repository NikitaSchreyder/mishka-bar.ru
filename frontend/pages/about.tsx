import { GetServerSideProps, NextPage } from "next"

import AboutIndexPage from "@/src/about/AboutIndexPage"
import { axiosApi } from '../src/core/api/AxiosApi'
import { IAboutIndexPageProps } from '../src/about/types/types'

const AboutPage: NextPage<IAboutIndexPageProps> = (p) => {
    return <AboutIndexPage {...p} />
}

export default AboutPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const aboutData = await(await axiosApi().get('/about')).data
    
    return {
        props: {
            ...aboutData
        }
    }
}