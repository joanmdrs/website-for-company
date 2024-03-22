import Head from 'next/head';
import React from 'react';
import CustomMenu from '@/components/Menu/Menu';
import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Content } from 'antd/es/layout/layout';
import { Footer } from 'antd/es/layout/layout';

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
                        justifyContent: "space-between",
                        alignItems: 'center',
                        backgroundColor: 'var(--primary-color)'
                    }}>

                    <div style={{padding: "20px 60px", borderRadius: "10px", backgroundColor: "red"}} className="demo-logo" />

                    <CustomMenu />
                </Header>
                <Content>

                </Content>

                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default App;
