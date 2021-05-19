import Head from 'next/head';
import '../styles/scss/global.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../apollo/apollo'
import '../node_modules/tailwindcss/dist/tailwind.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from '../components/Nav.component';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import MediaAsset from '../components/MediaAsset.component';
import Sidebar from '../components/Sidebar.component';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <style global jsx>
        {`
      .gradient {
        background: linear-gradient(90deg, #3365d5 0%, #51b4da 100%);
      }
      `}
      </style>
      <Head>
        <title>My first website</title>
      </Head>
      <Header />
      <Nav />
        <div className="row m-0">
          <div className="col-12 col-md-9 p-0">
            <Component {...pageProps} />
          </div>
          <div className="col-12 col-md-3 p-0">
            <Sidebar />
          </div>
        </div>
      <Footer />
    </ApolloProvider>
  )
}

export default withData(MyApp);
