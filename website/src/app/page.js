'use client'
import Head from 'next/head';
import React from 'react';
import CustomMenu from '@/components/Menu/Menu';
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Content } from 'antd/es/layout/layout';
import { Footer } from 'antd/es/layout/layout';
import Home from '@/pages/Home/Home';
import Courses from '@/pages/Courses/Courses';
import Reasons from '@/pages/Reasons/Reasons';
import Presentation from '@/pages/Presentation/Presentation';
import Dashboard from '@/pages/Dashboard/Dashboard';

function App() {
    return (
        <div>
            <Head>
                <title>WEBSITE FOR ENTERPRISE</title>

            </Head>
            
            <Layout>
                <Header 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: 'var(--white-color)',
                        boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        zIndex: '3',
                        position: 'fixed',
                        width: '100%'
                    }}>

                    <div style={{padding: "20px 60px", borderRadius: "10px", backgroundColor: "var(--primary-color)"}} className="demo-logo" />

                    <CustomMenu />
                </Header>
                <Content style={{zIndex: '2'}}>
                    <Home />
                    <Courses />
                    <Reasons />

                    <Presentation />

                    <Dashboard />

                </Content>

                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default App;
