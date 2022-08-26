import './App.css';
import Home from './views/home/Home';
import Navbar from './components/navbar/Navbar';
import Description from './views/description/Description';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Description />
        </>
    );
};

export default App;
