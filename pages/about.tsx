import Header from '@/components/header';
import Head from 'next/head';

export default function Blog() {   
    return (
      <>
        <Head>
          <title>About</title> 
        </Head>
        <main>
            <Header />
            <h4>You are in About page</h4>
        </main>
      </>
    )
  }
  
