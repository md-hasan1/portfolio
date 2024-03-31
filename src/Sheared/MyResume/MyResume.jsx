import { Link } from "react-router-dom";
import resume from "../../../public/md_hasan_full_stack_resume4.pdf";
import arrowAnimation from "../animation/Animation - dwon.json";
import Lottie from "lottie-react";
const MyResume = () => {
  return (
    <div>
      <div className="w-60 bg-gradient-to-r  px-4 py-2 rounded-lg  mx-auto">
        <h3 className="text-white text-center mx-auto bg-slate-700 border text-2xl py-2 px-4 border-yellow-300 ">
          Resume
        </h3>
        <Lottie
          className="h-20 w-20 mx-auto"
          animationData={arrowAnimation}
        ></Lottie>
      </div>
      <div className="flex justify-between w-1/2 mx-auto">
        <Link
          to="https://drive.google.com/file/d/1ro9wjtCX8aWdYT3yxgA06N7p3AVgN8mT/view?usp=drive_link"
          target="blank"
        >
          {" "}
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white uppercase py-4 px-4 rounded-xl hover:bg-slate-800 ">
            View on google drive
          </button>
        </Link>
        <div className=" ">
          <a href={resume} download="resume">
            <button className=" py-4 px-4 rounded-lg bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 uppercase ">
              Download resume
            </button>
          </a>
        </div>
      </div>
    </div>

    // <div className="mx-12  relative">
    //   <h4 className="text-center py-4  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase w-48 mx-auto rounded-lg text-orange-700 font-bold text-2xl">
    //     {" "}
    //     my resume
    //   </h4>
    //   <div className="relative mt-8 rounded-lg transition lg:w-1/2 mx-auto duration-300 hover:-translate-y-3 ">
    //     <div className="overflow-hidden rounded-lg  bg-base-100 shadow-xl mx-auto">
    //       <img
    //         className=" h-96 mx-auto rounded-lg"
    //         src="https://i.ibb.co/mzqk8Gc/Screenshot-2023-07-06-170318.png"
    //         alt=""
    //       />
    //     </div>
    //     <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
    //       <div className=" w-full flex justify-center items-center ">
    //         <Link
    //           to="https://drive.google.com/file/d/1ro9wjtCX8aWdYT3yxgA06N7p3AVgN8mT/view?usp=drive_link"
    //           target="blank"
    //         >
    //           {" "}
    //           <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase mt-[70%] py-2 px-4 rounded-xl ">
    //             View on google drive
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-auto w-full  my-5 relative left-[63%]">
    //     <a href={resume} download="resume">
    //       <button className=" py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase ">
    //         Download resume
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
};

export default MyResume;
