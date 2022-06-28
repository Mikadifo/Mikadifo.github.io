import ExperienceCard from '../../components/cards/ExperienceCard';
import Footer from '../../components/footer/Footer';
import './Experience.css';

//TODO: EXPORT TO JSON
const jobExperience = [
    {
        id: 'open-source',
        imgUrl: 'https://cdn.iowacomputergurus.com/blog/another-genius-move-from-microsoft-acquires-github-for-7-5-billion-in-stock.png',
        title: 'Open Source Colaborator',
        institution: 'GitHub',
        dateStart: 'March 2020',
        dateEnd: 'Now',
        description:
            '▪ FreeCodeCamp: Typographic corrections and translations of written classes into Spanish for students, using the Crowdin platform.\n▪ KE-complex_modifications: Developtment and maintenance of a keyboard modifications (Keypad as App Launcher).\n▪ Typographic and code corrections of a free bootcamp made by a Spanish youtuber (Codificandolo).',
    },
    {
        id: 'libelula',
        imgUrl: 'https://www.libelulasoft.com/img/1.png',
        title: 'Software Developer',
        institution: 'LibelulaSoft',
        dateStart: 'July 2021',
        dateEnd: 'January 2022',
        description:
            '▪ Fullstack developer of a scalable marketplace using ReactJS and Yii2, working as a team, managing pull requests, resolving issues, organizing tasks and delivery dates with SCRUM.\n▪ Development of a custom reporting system for the company, written in Java, which saves time for the development team when creating HTML templates.\n▪ QA testing for systems and issues reporting to the team.\n▪ Creation of documentation and manuals, both for clients and for the team.',
    },
];
const educationExperience = [
    {
        id: 'esl-hunter',
        imgUrl: 'https://www.hunter.cuny.edu/ieli/overrides/hunter.publictheme.refresh.simple/department-logo-static/IELI-Logo-v2.jpg/image',
        title: 'ESL',
        institution: 'Hunter College',
        dateStart: 'March 2022',
        dateEnd: 'Now',
        description:
            "English as Second Language: A great english course offered by Hunte College in New York City, I've learning the following skills:\n▪ Oral Skills: Where I'm learning to communicate and express my thoughts in English.\n▪ Writing Skills: Here I'm learning to write academic essays, paragraphs and summarizing. \n▪ Reading Skills: Skills to fully understand articles, news and different academic texts. \n▪ Grammar Skills: The perfect class to study complex rules of the language.",
    },
    {
        id: 'tecazuay',
        imgUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/23244390_154661861945235_6005544922762324835_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PNZz0HVyOw0AX_zR-bD&_nc_ht=scontent-lga3-1.xx&oh=00_AT_xhzXEtaZYnGvZO0xaM8gYBezpY2jrq_zsuroGuRWbUA&oe=62E13B98',
        title: 'Software Developtment',
        institution: 'Tecazuay',
        dateStart: 'May 2019',
        dateEnd: 'October 2021',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
];

const Experience = () => {
    let leftAligned = false;

    return (
        <>
            <div id="experience">
                <h1 className="text-center pt-5">Education</h1>
                <div className="vstack gap-5 align-items-center justify-content-center">
                    {educationExperience.map((item) => {
                        leftAligned = !leftAligned;
                        return (
                            <ExperienceCard
                                key={item.id}
                                experienceInfo={item}
                                isLeftAligned={leftAligned}
                            />
                        );
                    })}
                </div>
                <h1 className="text-center pt-5">Experience</h1>
                <div className="vstack gap-5 align-items-center justify-content-center">
                    {jobExperience.map((item) => {
                        leftAligned = !leftAligned;
                        return (
                            <ExperienceCard
                                key={item.id}
                                experienceInfo={item}
                                isLeftAligned={leftAligned}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Experience;
