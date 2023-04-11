import * as React from 'react';

const Footer = () => {
    return (
        <div className="text-blue-dark dark:text-white text-p font-league-spartan text-center mt-16 md:mt-20 lg:mt-28">
            <a
                href="mailto:mikadifopadillaheredia@gmail.com"
                className="hover:underline"
            >
                mikadifopadillaheredia@gmail.com
            </a>
            <p className="opacity-75 py-3 lg:py-4 border-t-[1px] border-blue-dark/25 dark:border-white/25 mt-2 lg:3">
                © 2022 Mikadifo
            </p>
        </div>
    );
};

export default Footer;
