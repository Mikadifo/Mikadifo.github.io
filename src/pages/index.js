import * as React from 'react';
import CallToAction from '../components/callToAction';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <CallToAction />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
