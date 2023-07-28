import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme', true);

    useEffect(() => {
        const bodyClass = window.document.body.classList;

        enabled ? bodyClass.add('dark') : bodyClass.remove('dark');
    }, [enabled]);

    return [enabled, setEnabled];
};

export default useDarkMode;
