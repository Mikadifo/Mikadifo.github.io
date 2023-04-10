import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-secondary via-blue-dark to-primary p-[2px]">
            <div className="flex flex-col justify-between rounded-tr-lg rounded-bl-lg p-4 lg:p-8 xl:p-12 bg-white dark:bg-blue-dark min-h-[300px]">
                <div>
                    <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-2 lg:mb-4 xl:mb-6">
                        {review.name}
                    </h4>
                    <p className="text-p font-league-spartan opacity-75">
                        {review.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
