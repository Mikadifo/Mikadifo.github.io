import Navbar from '../../components/navbar/Navbar';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import './Description.css';

const Description = () => {
    return (
        <div id="description">
            <Navbar />
            <div className="description-container">DESCIRPTION tal xual</div>
            <Experience />
            <Skills />
        </div>
    );
};

export default Description;
