import AOS from "aos";
import "aos/dist/aos.css";
import projectData from "./project.json";
import { useEffect } from "react";
import arrowAnimation from "../animation/Animation - arrow.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="mx-12 mt-12">
        <h1 className=" text-center  my-8">
          <span className="text-center px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase text-white font-bold text-2xl rounded-lg">
            my project
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 ">
          {projectData.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="text-[#cc99ff] bg-[#18121e] outline-double outline-2 p-2 rounded-lg"
            >
              <img
                className="object-cover rounded-lg"
                src={item.img}
                alt=""
              />
              <div>
                <div className="flex items-center justify-between  font-bold mb-8 gap-4">
                  <h1 className="font-bold text-2xl font-serif ">
                    Name : {item.name}
                  </h1>
                  <p className="font-mono font-bold">
                    Duration : {item.startTime} -- {item.endTime}
                  </p>
                </div>
                <div className="flex justify-around items-center gap-2">
                  <div>
                    <img
                      className="h-20 rounded-full"
                      src="https://i.ibb.co/7jMKJ36/github-6980894-1280.webp"
                      alt=""
                    />
                  </div>
                  <Lottie
                    className="h-20 w-20 "
                    animationData={arrowAnimation}
                  ></Lottie>

                  <Link to={item.clientSide}  className="hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                    CLIENT SIDE
                  </Link>
                  <Link to={item.serverSide} className=" hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                    SERVER SIDE
                  </Link>
                  <Link to={item.liveLink} className=" hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                    LIVE LINK
                  </Link>
                </div>
                {/* <div>
                  <h1 className="font-mono font-bold text-xl">
                    <span className="bg-slate-900 py-2 px-4 rounded shadow-inner shadow-white">
                      Tools And Technology :
                    </span>
                    <small>
                      {" "}
                      tailwind, daisy UI, JavaScript, react.js, node.js,
                      express, firebase, mongoDB, vercel, stripe.js, React
                      Router, Tan stack Query, react Hook Form.
                    </small>
                  </h1>
                  <h1 className="font-mono font-bold text-xl mt-4">
                    <span className="bg-slate-900 py-2 px-4 rounded shadow-inner shadow-white">
                      About Project :
                    </span>
                    <small>
                      {"  "} FOR ADMIN: email- ttt@t.com password- 12345678Aa@{" "}
                      <br />
                     {item.about}
                    </small>
                  </h1>
                </div> */}
              </div>
              <div className="card-actions justify-end lg:me-4">
                <Link to={"/project-details"} className="hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
