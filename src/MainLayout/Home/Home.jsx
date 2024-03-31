import Banner from "../../Sheared/Banner/Banner";
import Contact from "../../Sheared/Contact/Contact";
import MyResume from "../../Sheared/MyResume/MyResume";
import Project from "../../Sheared/Project/Project";
import Skills from "../../Sheared/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <MyResume></MyResume> */}
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;