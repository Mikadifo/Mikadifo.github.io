import Home from './views/home/Home';
import Navbar from './components/navbar/Navbar';
import Description from './views/description/Description';
import Footer from './components/footer/Footer';
import Experience from './views/experience/Experience';
import Projects from './views/projects/Projects';
import './App.css';
import { useState } from 'react';

const App = () => {
    const [currentItemHash, setCurrentItem] = useState('#home');

    return (
        <>
            <Navbar currentItemHash={currentItemHash} />
            <Home setCurrentItem={setCurrentItem} />
            <Description setCurrentItem={setCurrentItem} />
            <Projects setCurrentItem={setCurrentItem} />
            <Experience setCurrentItem={setCurrentItem} />
            <Footer setCurrentItem={setCurrentItem} />
        </>
    );
};

export default App;
