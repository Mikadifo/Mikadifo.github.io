import React from 'react';
import leftBlob from './../../images/left_blob.svg';
import rightBlob from './../../images/right_blob.svg';

const Blobs = () => {
    return (
        <div>
            <img
                src={leftBlob}
                alt="left_blob"
                className="absolute sm:w-1/2 lg:w-1/3 2xl:w-1/4 top-1/4 -left-1/3 sm:-left-1/4 lg:-left-24"
            />
            <img
                src={rightBlob}
                alt="right_blob"
                className="absolute sm:w-1/2 lg:w-1/3 2xl:w-1/4 bottom-0 -right-1/3 sm:-right-1/4 lg:-right-24"
            />
        </div>
    );
};

export default Blobs;
