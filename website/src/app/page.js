'use client'
import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Footer } from 'antd/es/layout/layout';
import Home from '@/pages/Home/Home';
import Courses from '@/pages/Courses/Courses';
import Reasons from '@/pages/Reasons/Reasons';

import Header from '@/components/Header/Header';
import Feedback from '@/pages/Feedback/FeedBack';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';

function App() {
    return (
        <div>
            <Head>
                <title>WEBSITE FOR ENTERPRISE</title>

            </Head>
            
            <Layout>
                
                <Header />
                
                <Content style={{zIndex: '2'}}>
                    <Home />
                    <Reasons />
                    <Courses />
                    <Feedback />
                    <About />
                    <Contact />

                </Content>

                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default App;
