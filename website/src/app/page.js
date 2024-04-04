'use client'
import Head from 'next/head';
import React from 'react';
import CustomMenu from '@/components/Menu/Menu';
import { Button, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Footer } from 'antd/es/layout/layout';
import Home from '@/pages/Home/Home';
import Courses from '@/pages/Courses/Courses';
import Reasons from '@/pages/Reasons/Reasons';
import Presentation from '@/pages/Presentation/Presentation';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Menu from '@/components/Menu/Menu';
import Header from '@/components/Header/Header';
import Feedback from '@/pages/Feedback/FeedBack';

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
                    

                    <Presentation />


                </Content>

                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default App;
