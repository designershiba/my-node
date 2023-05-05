import Header from '@/components/header';
import Head from 'next/head';

export default function Blog() {   
    return (
      <>
        <Head>
          <title>Blog</title> 
        </Head>
        <main>
            <Header />
            <h4>You are in blog page</h4>
        </main>
      </>
    )
  }
  
