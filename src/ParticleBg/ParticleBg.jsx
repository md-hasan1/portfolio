
import Particles from "react-particles";
import particleConfig from "../particleConfig/particleConfig";


const ParticleBg = () => {
    return (
        <div>
           <Particles params={particleConfig}></Particles> 
        </div>
    );
};

export default ParticleBg;