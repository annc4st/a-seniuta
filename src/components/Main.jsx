import About from './main_components/About';
import Contact from './main_components/Contact';
import Projects from './main_components/Projects';
import TechStack from './main_components/TechStack';

const Main = () => {
    return (
        <>
            <About />
            <TechStack />
            <Projects />
            {/* <Certificates /> */}
            <Contact />
        </>
    )

}

export default Main;