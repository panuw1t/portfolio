import Layout from '../../components/layout';
import { getAllPostIds, getPostData, PostData } from '../../lib/parse';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface data{
  title: string,
  info: string,
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id : any = params?.id || "";    

    try {
      const res = await fetch(`${process.env.SERVER_URL || 'http://localhost:8080'}/query?id=${id}`);
      if( res.status == 404){
        return {
          notFound: true,
        }
      }
      const json = await res.text();
      const data: data = {title:id, info:json}      

      return {
        props: {
          data,
        },
      };
    }
    catch (error){
      return {
        notFound: true,
      }
    }
};

export default function Project({ data }: PostData) {
    return (
        <Layout home={false}>
            <Head>
                <title>{data.title}</title>
            </Head>
            <p>{data.info}</p>
        </Layout>
    )
}