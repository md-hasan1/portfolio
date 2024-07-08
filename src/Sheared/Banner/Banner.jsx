/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import "../../../src/App.css";
import { Link } from "react-router-dom";
import resume from "../../../public/md_hasan_full_stack_resume4.pdf";
import arrowAnimation from "../animation/Animation - arrow.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div id="about" className=" flex flex-col-reverse lg:flex-row flex-grow-1">
      <div className="mx-10 lg:w-1/2 ">
        <div className="overflow-hidden shadow-2xl p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-8 rounded-lg border-e-4 border-e-red-600 ">
          <p className="uppercase font-semibold mt-4 ">welcome to my world</p>
          <p className="font-bold text-5xl ">
            Hi, I'm <span className="text-white">Md Hasan</span>
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Professional Developer",

              1000, // wait 1s before replacing "Mice" with "Hamsters"

              "MERN-Stack Developer",
              1000,

              " Full-Stack Developer",
              1000,

              "Front-End Developer",
              1000,
            ]}
            wrapper="div"
            speed={50}
            className="text-[white]"
            style={{ fontSize: "3em", font: "bold", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="mt-2 p-8 text-white text-2xl">
          I am used animation as a third dimension by which to simplify
          experiences and kuiding thro each and every interaction. I’m not
          adding motion just to spruce things up, but doing it in ways that.
        </p>

        <div className="lg:flex justify-between gap-4 items-center">
          <div className=" bg-gradient-to-r  px-4 py-2 rounded-lg  md:mx-auto flex justify-center md:items-center mt-3">
            <h3 className="text-white md:text-center md:mx-auto bg-slate-800 py-4 px-4 text-2xl rounded-lg">
              Resume
            </h3>
            <Lottie
              className="h-20 w-20 mx-auto"
              animationData={arrowAnimation}
            ></Lottie>
          </div>
          {/* view google drive */}
          <Link
            to="https://drive.google.com/file/d/1ro9wjtCX8aWdYT3yxgA06N7p3AVgN8mT/view?usp=drive_link"
            target="blank"
          >
            {" "}
            <button className="bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500 uppercase py-4 px-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300 my-3">
              View on google drive
            </button>
          </Link>
          <div className=" ">
            {/* download resume */}
            <a href={resume} download="resume">
              <button className=" py-4 px-4 rounded-lg bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500 uppercase hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300 my-3">
                Download resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <img
        className="lg:w-[400px] lg:h-[400px] my-8 rounded-lg shadow-0 ms-8 lg:ml-32  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pr-2 pb-2 bg-opacity-25  hover:scale-110 duration-500"
        src="https://i.ibb.co/D90Bz3k/IMG-20230212-051852.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
