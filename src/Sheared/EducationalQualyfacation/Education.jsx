import Lottie from "lottie-react";
import animation from "../animation/education.json";
const Education = () => {
  return (
    <div className="mt-6 ">
        <h4 className="text-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase w-64 mx-auto rounded-lg font-bold text-2xl mb-8 text-white">
        Educational Qualification
      </h4>
      <div className="grid  lg:grid-cols-2">
        <div className="w-3/5 mx-auto rounded-lg">
          <Lottie animationData={animation}></Lottie>
        </div>

        <div className="bg-[#18121E] lg:w-3/5 mx-auto pt-4 rounded-lg">
                <p className="before:rounded-full  before:content-[' '] before:bg-[#8409ff] before:h-5 before:w-5 before:block flex justify-center items-center text-[#8409ff] text-xl font-bold gap-4 ">Diploma in Computer Engineering (DCE)</p>
                <p className="text-white ml-16 font-semibold uppercase">Barguna govt polytechnic institute, Barguna</p>
                <p className="text-white ml-16 font-semibold bg-slate-500 w-28 text-center rounded-lg mb-4">2021-2024</p>
                <p className="before:rounded-full  before:content-[' '] before:bg-[#8409ff] before:h-5 before:w-5 before:block flex justify-center items-center text-[#8409ff] text-xl font-bold gap-4 uppercase"> SECONDARY SCHOOL CERTIFICATE (SSC)</p>
                <p className="text-white ml-16 font-semibold uppercase">K M YOUSUF ALI HIGH SCHOOL, mothbaria</p>
                <p className="text-white ml-16 font-semibold bg-slate-500 w-28 text-center rounded-lg">2016-2020</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
