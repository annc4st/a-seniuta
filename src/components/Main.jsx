import About from './main_components/About';
import Contact from './main_components/Contact';
import Projects from './main_components/Projects';
import TechStack from './main_components/TechStack';

const Main = () => {
    return (
        <div className="md:w-2/3 sm:w-full mx-auto">
            <About />
            <TechStack />
            <Projects />
            {/* <Certificates /> */}
            <Contact />
        </div>
    )

}

export default Main;