import React from 'react';
import Button from './button';
import Input from './input';

const Contact = () => {
    //TODO: Add blobs
    return (
        <div className="text-blue-dark dark:text-white mt-20 md:mt-24 lg:mt-48">
            <h3 className="text-h3-sm lg:text-h3-md xl:text-h3-lg font-bold font-kufam text-center mb-6 lg:mb-10">
                Contact me
            </h3>
            <div className="flex justify-center">
                <form
                    action=""
                    className="grid gap-3 md:gap-4 lg:gap-8 min-w-[19rem] md:min-w-[32rem] lg:min-w-[42rem]"
                >
                    <Input label="Your name:" type="text" id="name" />
                    <Input label="Your email:" type="email" id="email" />
                    <Input label="Your idea:" type="textarea" id="idea" />
                    <div className="text-center">
                        <Button>Let's talk</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
