import Home from './views/home/Home';
import Navbar from './components/navbar/Navbar';
import Description from './views/description/Description';
import Footer from './components/footer/Footer';
import Experience from './views/experience/Experience';
import Projects from './views/projects/Projects';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Description />
            <Projects />
            <Experience />
            <Footer />
        </>
    );
};

export default App;
