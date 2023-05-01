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
        <p>Hello, I&apos;m panuvit. I&apos;m student comsci. You can check my
          <a href="https://github.com/panuw1t"> GitHub</a>.
        </p>
        <p>
          (This is a sample website - I can build website like this from
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={`/work/1`}>Experience and project</Link>
              <br />
              200 cell brain
            </li>
            <li className={utilStyles.listItem}>
              <Link href={`/work/2`}>Skill that I learn from myself</Link>
              <br />
              mostly youtube
            </li>
        </ul>
      </section>
    </Layout>
  );
}