import * as React from 'react';
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
            <nav className="bg-white dark:bg-blue-dark text-blue-dark dark:text-white px-16 py-3 flex justify-between">
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
                <ul className="flex space-x-4 text-2xl lg:text-3xl 2xl:text-4xl items-center">
                    <li>
                        <button
                            title="Toggle theme"
                            className="flex self-center hover:opacity-80"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
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
                            <BsGithub />
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
                            <BsLinkedin />
                        </a>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default Layout;
