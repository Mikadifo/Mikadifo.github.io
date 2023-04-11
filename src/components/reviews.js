import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CarouselControls from './carouselControls';
import ReviewCard from './reviewCard';

const Reviews = () => {
    const { allReviewsJson } = useStaticQuery(graphql`
        query ReviewQuery {
            allReviewsJson {
                edges {
                    node {
                        id
                        URL
                        name
                        text
                    }
                }
                totalCount
            }
        }
    `);

    return (
        <div className="text-blue-dark dark:text-white mt-20 md:mt-24 lg:mt-48">
            <h3 className="text-h3-sm lg:text-h3-md xl:text-h3-lg font-bold font-kufam text-center mb-6 lg:mb-10">
                Reviews
            </h3>
            <CarouselControls
                elements={allReviewsJson}
                renderElement={(review) => (
                    <ReviewCard review={allReviewsJson.edges[review].node} />
                )}
            />
        </div>
    );
};

export default Reviews;
