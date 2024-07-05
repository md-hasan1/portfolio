import Banner from "../../Sheared/Banner/Banner";
import Contact from "../../Sheared/Contact/Contact";
import Project from "../../Sheared/Project/Project";
import Skills from "../../Sheared/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;