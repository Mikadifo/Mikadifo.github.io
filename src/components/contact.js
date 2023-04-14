import React, { useState } from 'react';
import Button from './button';
import Input from './input';
import Blobs from './curves/blobs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSendEmail = (evt) => {
        setFormStatus('loading');
        evt.preventDefault();
        const form = evt.target;
        if (
            form.name.value.length <= 0 ||
            form.email.value.length <= 0 ||
            form.idea.value.length <= 0
        )
            return setFormStatus('empty');

        fetch(process.env.GATSBY_API_URL + process.env.GATSBY_API_KEY, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.success) return setFormStatus('error');
                setFormStatus('success');
                form.name.value = '';
                form.email.value = '';
                form.idea.value = '';
            })
            .catch((_) => setFormStatus('error'));
    };

    return (
        <div className="relative overflow-hidden px-16" id="contact-form">
            <Blobs />
            <div className="text-blue-dark dark:text-white mt-20 md:mt-24 lg:mt-48 relative">
                <h3 className="text-h3-sm lg:text-h3-md xl:text-h3-lg font-bold font-kufam text-center mb-6 lg:mb-10">
                    Contact me
                </h3>
                <div className="flex justify-center">
                    <form
                        method="post"
                        onSubmit={handleSendEmail}
                        className="grid gap-3 md:gap-4 lg:gap-8 min-w-[19rem] md:min-w-[32rem] lg:min-w-[42rem]"
                    >
                        <Input label="Your name:" type="text" id="name" />
                        <Input label="Your email:" type="email" id="email" />
                        <Input label="Your idea:" type="textarea" id="idea" />
                        <div className="text-center">
                            {formStatus === 'empty' && (
                                <p className="mb-3 text-p font-league-spartan text-error">
                                    All fields are required.
                                </p>
                            )}
                            {formStatus === 'error' && (
                                <p className="mb-3 text-p font-league-spartan text-error">
                                    Sorry, there was an error sending the email.
                                    Try again in a few moments.
                                </p>
                            )}
                            {formStatus === 'success' && (
                                <p className="mb-3 text-p font-league-spartan text-success">
                                    Thanks! I received your message, I will
                                    contact you soon!
                                </p>
                            )}
                            <Button
                                disabled={
                                    formStatus === 'loading' ||
                                    formStatus === 'success'
                                }
                            >
                                {formStatus === 'loading' ? (
                                    <span className="flex">
                                        Sending
                                        <AiOutlineLoading3Quarters className="animate-spin ml-2" />
                                    </span>
                                ) : (
                                    "Let's talk"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
