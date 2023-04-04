import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hey, I'm Mikadifo</h1>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo />;
