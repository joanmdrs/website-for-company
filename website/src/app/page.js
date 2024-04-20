'use client'
import Head from 'next/head';
import React from 'react';
import Home from '@/pages/Home/Home';
import Courses from '@/pages/Courses/Courses';
import Reasons from '@/pages/Reasons/Reasons';
import Feedback from '@/pages/Feedback/FeedBack';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Dashboard from '@/pages/Dashboard/Dashboard';
import CustomHeader from '@/components/Header/Header';
import Events from '@/pages/Events/Events';
import Footer from '@/pages/Footer/Footer';

function App() {
    return (
        <body>

            <Head>
                <title>WEBSITE FOR ENTERPRISE</title>

            </Head>
            
            <main>
                
                <CustomHeader />
                
                <Home />
                <Dashboard />
                <Reasons />
                <Courses />
                <Feedback />
                <Events />
                <About />
                <Contact />
                <Footer />
            </main>
        </body>

    );

}

export default App;
