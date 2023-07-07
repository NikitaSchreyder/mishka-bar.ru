import StocksIndex from "@/src/stocks/StocksIndex";
import { GetServerSideProps, NextPage } from "next";
import { axiosApi } from '../src/core/api/AxiosApi';

const StocksPage: NextPage<{stocksItems: {name: string, description: string, thumbUrl: string}[]}> = ({stocksItems}) => {
    return <StocksIndex stocksItems={stocksItems} />
}

export default StocksPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const stocksItems = (await axiosApi.get('stocks')).data
    return {
        props: {
            stocksItems
        }
    }
}