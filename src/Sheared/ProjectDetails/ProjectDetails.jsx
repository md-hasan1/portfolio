import arrowAnimation from "../animation/Animation - arrow.json";
import Lottie from "lottie-react";

const ProjectDetails = () => {
  return (
    <div className="mx-12 mt-6">
      <h1 className=" text-center  my-8">
        <span className="text-center px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase text-white font-bold text-2xl rounded-lg">
          Single Project Details
        </span>
      </h1>
      <div className="w-2/3 mx-auto">
        <div className="text-[#cc99ff] outline-double outline-2 p-2 rounded-lg">
          <img
            className="object-cover rounded-lg"
            src="https://i.ibb.co/myWGy3s/Screenshot-2023-07-05-120917.png"
            alt=""
          />
          <div>
            <div className="flex items-center justify-between  font-bold mb-4 gap-4">
              <h1 className="font-bold text-2xl font-serif ">
                Name : Dance Studio{" "}
              </h1>
              <p className="font-mono font-bold">
                Duration : 10/06/2023 -- 14/06/2023
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

              <button className="hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                CLIENT SIDE
              </button>
              <button className=" hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                SERVER SIDE
              </button>
              <button className=" hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300">
                LIVE LINK
              </button>
            </div>
            <div>
              <h1 className="font-mono font-bold text-xl">
                <span className="bg-slate-900 py-2 px-4 rounded shadow-inner shadow-white">
                  Tools And Technology :
                </span>
                <small>
                  {" "}
                  tailwind, daisy UI, JavaScript, react.js, node.js, express,
                  firebase, mongoDB, vercel, stripe.js, React Router, Tan stack
                  Query, react Hook Form.
                </small>
              </h1>
              <h1 className="font-mono font-bold text-xl mt-4">
                <span className="bg-slate-900 py-2 px-4 rounded shadow-inner shadow-white">
                  About Project :
                </span>
                <small>
                  {"  "} FOR ADMIN: email- ttt@t.com password- 12345678Aa@{" "}
                  <br />
                  In this site three role user when login default role student.
                  Student can add her favorite classes and payment this classes
                  and show payment history. If admin make instructor this person
                  can add new class and he show all deny class by admin. Admin
                  can set role for every user and approved and deny all new add
                  class
                </small>
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
