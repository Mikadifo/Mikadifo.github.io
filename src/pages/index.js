import * as React from 'react';
import About from '../components/about';
import CallToAction from '../components/callToAction';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <CallToAction />
            <About />
            <Projects />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
