import React from 'react';
import About from '../components/about';
import CallToAction from '../components/callToAction';
import Contact from '../components/contact';
import Education from '../components/education';
import Experience from '../components/experience';
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
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
