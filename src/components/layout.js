import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import useDarkMode from '../hooks/useDarkMode';
import logoDark from './../images/logo_dark.svg';
import logoLight from './../images/logo_light.svg';
import icon from './../images/icon.svg';

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <div className="bg-white dark:bg-blue-dark">
            <nav className="bg-white/80 dark:bg-blue-dark/80 text-blue-dark dark:text-white px-16 py-3 flex justify-between sticky top-0 z-50 backdrop-blur-sm">
                <img
                    src={icon}
                    alt="Logo icon"
                    className="w-12 h-8 sm:hidden"
                />
                <img
                    src={darkMode ? logoLight : logoDark}
                    alt="Logo full"
                    className="w-[248] h-12 hidden sm:block"
                />
                <ul className="flex space-x-4 items-center">
                    <li>
                        <button
                            title="Toggle theme"
                            className="flex self-center hover:opacity-80"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? (
                                <FaSun size={32} />
                            ) : (
                                <FaMoon size={32} />
                            )}
                        </button>
                    </li>
                    <li>
                        <a
                            href="https://github.com/mikadifo"
                            className="hover:opacity-80"
                            title="Go to my github profile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub size={32} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mikadifo"
                            className="hover:opacity-80"
                            title="Go to my linkedin profile"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLinkedin size={32} />
                        </a>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default Layout;
