import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mx-12 mt-8" id="contact">
            <p className="text-center py-4  bg-gradient-to-r from-slate-400 to-slate-200 w-48 mx-auto uppercase text-orange-700 font-bold text-2xl">Contact me</p>
            <div className="grid  lg:grid-cols-3 gap-8 mt-8">


                <div className="card col-span-1 bg-slate-200 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/LzYWKJ0/contact1.png" alt="hand sheak" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Md Hasan</h2>
                        <p className="font-bold">junior MERN-Stack Developer</p>
                        <p>I am available for remote job and internship job. Connect with me via and call in to my account.</p>
                        <p>Phone number: 01728026096</p>
                        <p>Email: mdhasan26096@gmail.com</p>
                        <div className="card-actions">

                            <button className="btn bg-gradient-to-r from-slate-500 to-orange-400 "><FaFacebookF></FaFacebookF></button>
                            <button className="btn bg-gradient-to-r from-slate-500 to-orange-400 "><FaLinkedinIn></FaLinkedinIn></button>
                            <button className="btn bg-gradient-to-r from-slate-500 to-orange-400 "><FaGithub></FaGithub></button>
                        </div>
                    </div>

                </div>
                <div className="shadow-2xl  col-span-2 bg-slate-200 rounded-lg p-6">

                  <div className="lg:flex justify-center gap-8">
                  <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Your name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div> 
                     <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Your Number</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                  </div>

                  <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Your Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                  <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> subject</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                   <div>
                   <label className="label">
                            <span className="label-text font-bold">Massage</span>
                        </label>
                    <textarea  className="textarea textarea-secondary w-full h-28 " placeholder="massage"></textarea>
                   </div>
                   <button className="btn btn-secondary">send massage</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;