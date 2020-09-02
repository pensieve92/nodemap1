import React from 'react';
import Head from 'next/head';

import IndexHeader from '../components/Indexheader';
import Category from '../components/Category'; 

const Home = () => {
    return(
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <title>Home | NodeMap</title>
            </Head>
            <IndexHeader />
            <Category name={"note"}/>
            <Category name={"calc"}/>
            <Category name={"account"}/>
            <Category name={"기타"}/>
        </div>)
    };

export default Home;