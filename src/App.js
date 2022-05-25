import './App.css';
import Home from './views/home/Home';
import Experience from './views/experience/Experience';
import Description from './views/description/Description';
import CircleHomeButton from './components/CircleHomeButton/CircleHomeButton';
import { useState } from 'react';

const App = () => {
    const [showHomeBack, setShowHomeBack] = useState(false);

    return (
        <>
            <Home setShowHomeBack={setShowHomeBack} />
            <Description />
            <Experience />
            <CircleHomeButton visible={showHomeBack} />
        </>
    );
};

export default App;
