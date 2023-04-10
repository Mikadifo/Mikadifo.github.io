import React from 'react';
import Button from './button';

const Contact = () => {
    //TODO: Move inputs to compoenents maybe
    //TODO: Add blobs
    return (
        <div className="text-blue-dark dark:text-white mt-20 md:mt-24 lg:mt-48">
            <h3 className="text-h3-sm lg:text-h3-md xl:text-h3-lg font-bold font-kufam text-center mb-6 lg:mb-10">
                Contact me
            </h3>
            <div className="max-w-[19rem] md:max-w-[32rem] lg:max-w-[42rem]">
                <form action="" className="grid in-w-[19rem]">
                    <label htmlFor="name">Your name:</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Your email:</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="idea">Your idea:</label>
                    <textarea name="idea" id="" cols="30" rows="10" />
                    <div className="mt-8 md:mt-12 lg:mt-14">
                        <Button>Let's talk</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
