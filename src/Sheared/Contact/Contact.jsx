/* eslint-disable no-unused-vars */
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import FancyText from "@carefully-coded/react-text-gradient";
import { useForm } from "react-hook-form";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    emailjs.sendForm('service_1h2pcjm', 'template_ud2jax5', form.current, 'CzSc-vT8njYcSrXBo')
      .then(
        (result) => {
          reset()
          console.log('SUCCESS!', result.status, result.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className="mx-12 mt-8" id="contact">
      <h4 className="text-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase w-48 mx-auto rounded-lg font-bold text-2xl mb-8 text-white">
        Hire Me
      </h4>
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl col-span-2 bg-[#140C1C] text-[#E2E8F0] border-2 border-[#cc99ff] p-8 rounded-lg lg:w-3/4"
        >
          <FancyText className="" gradient={{ from: "#FDFBFF", to: "#8852F7" }}>
            <h6 className="text-5xl font-bold text-center mb-4">
              let&apos;s work together!
            </h6>
          </FancyText>
          <p className="mb-2">
            I design and code beautifully simple things and I love what I do.
            <br /> Just simple like that!
          </p>
          <div className="lg:flex justify-center gap-8">
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">Name</span>
              </div>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                {...register("user_name", { required: true })}
                className="input input-bordered text-black font-bold focus:border-[#cc99ff] w-full"
              />
              { errors.user_name && <span className="text-red-500">Name is required</span>}
            </div>
          </div>

          <div className="form-control w-full">
            <div className="label">
              <span className="label-text text-white">Email</span>
            </div>
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              {...register("user_email", { required: true })}
              className="input input-bordered text-black font-bold border-b-2 focus:border-[#cc99ff] w-full"
            />
            {errors.user_email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text text-white">Subject</span>
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              {...register("subject", { required: true })}
              className="input input-bordered text-black font-bold focus:border-[#cc99ff] w-full"
            />
            {errors.subject && <span className="text-red-500">Subject is required</span>}
          </div>
          <div>
            <div className="label">
              <span className="label-text text-white">Message</span>
            </div>
            <textarea
              className="textarea text-black font-bold input-bordered w-full h-28 focus:border-[#cc99ff]"
              name="message"
              {...register("message", { required: true })}
              placeholder="Message"
            ></textarea>
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>
          <button
            type="submit"
            className="btn hover:bg-slate-700 bg-[#8409ff] text-white font-bold px-4 py-2 rounded outline-double hover:scale-105 hover:shadow-xl hover:shadow-purple-500 duration-300"
          >
            Send Email
          </button>
        </form>
        <div className="card col-span-1 w-full mx-auto bg-[#18121e] shadow-2xl text-[#E2E8F0] p-2 rounded-lg">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/LzYWKJ0/contact1.png"
              alt="hand shake"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Md Hasan</h2>
            <p className="font-bold">Junior MERN-Stack Developer</p>
            <p> I was complete diploma engineering on computer science.
              I am available for remote job and internship job. Connect with me
              via and call in to my account.
            </p>
            <div className="flex gap-4">
              <img
                className="bg-[#8409ff] border border-white hover:bg-white h-12 rounded-lg p-2"
                src="https://i.ibb.co/HnGkns7/telephone.png"
                alt="phone"
              />
              <p>
                <span>Phone</span> <br />
                <span className="font-bold"> 01728026096</span>
              </p>
            </div>
            <div className="flex gap-4">
              <img
                className="bg-[#8409ff] border border-white hover:bg-white h-12 rounded-lg p-2"
                src="https://i.ibb.co/0cHbkFL/email.png"
                alt="email"
              />
              <p>
                <span>Email</span> <br />
                <span className="font-bold"> mdhasan26096@gmail.com</span>
              </p>
            </div>
            <div className="card-actions">
              <button className="btn bg-[#8409ff]">
                <FaFacebookF />
              </button>
              <button className="btn bg-[#8409ff]">
                <FaLinkedinIn />
              </button>
              <button className="btn bg-[#8409ff]">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
