import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazon' : 'Amazon'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <Navbar />
        <main className='container m-auto mt-4 px-2'>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
