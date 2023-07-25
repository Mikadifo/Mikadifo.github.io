import React from 'react';
import Button from './../components/button';
import Layout from '../components/layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <main className="text-center mt-16 text-blue-dark dark:text-white h-screen">
                <h2 className="text-h2-sm lg:text-h2-md xl:text-h2-lg font-kufam mb-2">
                    Page not found
                </h2>
                <p className="text-p font-league-spartan mb-6">
                    Sorry 😔, we couldn’t find what you were looking for.
                </p>
                <Button link to="/">
                    Go home
                </Button>
            </main>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
