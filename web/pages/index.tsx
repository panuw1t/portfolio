import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '../lib/parse';

interface Props {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};


const siteTitle: string = "portfolio website";

export default function Home({ allPostsData }: PostData) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={`/work/hello`}>When to Use Static Generation v.s. Server-side Rendering</Link>
              <br />
              200 cell brain
            </li>
            <li className={utilStyles.listItem}>
              <Link href={`/work/notreal`}>Two Forms of Pre-rendering</Link>
              <br />
              time = illusion
            </li>
        </ul>
      </section>
    </Layout>
  );
}