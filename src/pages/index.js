import React from 'react';
import About from '../components/about';
import CallToAction from '../components/callToAction';
import Contact from '../components/contact';
import Education from '../components/education';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Reviews from '../components/reviews';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <CallToAction />
            <About />
            <Projects />
            <Experience />
            <Education />
            <Reviews />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
