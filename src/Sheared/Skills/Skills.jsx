import skillData from "../../../skill.json";
const Skills = () => {
  return (
    <div id="skill">
      <h4 className="text-center py-4  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase w-48 mx-auto rounded-lg  font-bold text-2xl mb-8 text-white">
        {" "}
        my Skills
      </h4>

      <div className="grid  lg:grid-cols-8 gap-10 mx-12 text-white">
        {skillData?.map((item, index) => (
          <div
            key={index}
            className="h-48  p-1 hover:p-2  bg-[#000]   outline-double outline-2  duration-300 shadow-lg  shadow-white hover:shadow-2xl hover:shadow-white outline-offset-2 relative	outline-color: #4b5563 rounded-lg box-shadow "
          >
            <img className="h-32  mx-auto rounded-lg" src={item?.img} alt="" />
            <p
              className="h-36 w-36 absolute top-0 -right-5 z-50"
              style={{
                backgroundImage:
                  "url(" + "https://i.ibb.co/mGX0M9j/sbig4.webp" + ")",
              }}
            ></p>
            <p
              className="h-8 w-8  rounded-full shadow-lg shadow-white  absolute bottom-4 right-10 z-50"
              style={{
                backgroundImage:
                  "url(" + "https://i.ibb.co/KVH7kVY/sbig3.webp" + ")",
              }}
            ></p>
            <p
              className="h-8 w-8  rounded-full shadow-lg shadow-white  absolute top-4 left-10 z-50"
              style={{
                backgroundImage:
                  "url(" + "https://i.ibb.co/KVH7kVY/sbig3.webp" + ")",
              }}
            ></p>

            <div className="flex justify-between font-extralight ">
              <span className="text-2xl font-bold text-[#df17fd] mx-auto">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* <ProgressBar completed={60} transitionDuration='2s' initCompletedOnAnimation={0} bgColor="#fa05d5" animateOnRender={true}/>; */}
    </div>
  );
};

export default Skills;
