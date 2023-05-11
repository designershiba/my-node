import Header from '@/components/header';
import Head from 'next/head';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } });
  console.log(res);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  } 
  return res.json();
}

export default async function Blog() {
  const data = await getData();
  console.log('Start form', data);
  
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <main>
        <Header />
        <h4>You are in blog page</h4>
        {data.map((item:any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </main>
    </>
  )
}


