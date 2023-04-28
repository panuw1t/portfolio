import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function FirstPost() {
  return (
    <Layout home={true}>
      <Head>
        <title>about me</title>
      </Head>
      <h1>I am ...</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}