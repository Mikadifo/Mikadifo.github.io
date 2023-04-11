import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = () => {
    const seo = useSiteMetadata();

    return (
        <>
            <title>Mikadifo</title>
            <meta name="description" content={seo.description} />
            <meta
                name="keywords"
                content="Software Developer, Front End Developer, Freelancer Developer, React, Javascript"
            />
            <meta name="image" content={`${seo.siteUrl}${seo.image}`} />
            <meta name="author" content="Mikadifo" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        </>
    );
};

export default Seo;
