import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../apollo/apollo'
// import '../node_modules/tailwindcss/dist/tailwind.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from '../components/Nav.component';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import MediaAsset from '../components/MediaAsset.component';
import Sidebar from '../components/Sidebar.component';
import '../styles/scss/global.scss';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>UzhHKBA</title>
      </Head>
      {/* <Header /> */}
      <Nav />
      {/* <main className="container">
        <article className="article"> */}
          <Component {...pageProps} />
        {/* </article>
        <aside className="sidebar">
            <Sidebar />
        </aside>
      </main> */}
      <Footer />
    </ApolloProvider>
  )
}

export default withData(MyApp);
