import Banner from "../../Sheared/Banner/Banner";
import Contact from "../../Sheared/Contact/Contact";
import Education from "../../Sheared/EducationalQualyfacation/Education";
import Project from "../../Sheared/Project/Project";
import Skills from "../../Sheared/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Education></Education>
        </div>
    );
};

export default Home;