import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-secondary via-blue-dark to-primary p-[2px]">
            <div className="flex flex-col justify-between rounded-tr-lg rounded-bl-lg p-4 lg:p-8 xl:p-12 bg-white dark:bg-blue-dark min-h-[300px]">
                <div>
                    <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-1 lg:mb-2 xl:mb-4">
                        {review.name}
                    </h4>
                    <h5 className="text-h6-md lg:text-h6-lg font-kufam mb-4 lg:mb-6 xl:mb-8 opacity-75 font-bold">
                        {review.role}
                    </h5>
                    <p className="text-p font-league-spartan opacity-75">
                        {review.text}
                    </p>
                </div>
                <div className="flex mt-5 justify-end">
                    <a
                        href={review.URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-h6-md
                    lg:text-h6-lg font-bold hover:underline underline-offset-4"
                    >
                        See website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
