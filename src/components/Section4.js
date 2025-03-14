import React, {useRef} from "react";
import MyImage from '../images/IMG_1907.png';
import emailjs from '@emailjs/browser';

const Section4 = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm(
                "service_mr4uihv",
                "template_10tmg8z",
                form.current,
                "ieK-D8MkJ3Ltly-RQ"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully!", result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Failed to send email:", error.text);
                    alert("Failed to send message. Please try again.");
                }
            )
        e.target.reset();
    }   



    return (
        <section id="section4">
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="col-span-1 flex justify-center md:justify-start relative">
            <img
              src={MyImage}
              alt="MyImage"
              className="w-full max-w-xs md:max-w-full hidden md:block"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent hidden md:block"></div>
          </div>
          <div className="col-span-2">
            <h1 className="text-gray-400 font-thin text-center pb-4 text-2xl md:text-3xl lg:text-4xl">
              Contact Me
            </h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
              <div className="w-full md:w-3/4 lg:w-2/3 xl:w-full">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    name="name" // Add name attribute for EmailJS
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                    placeholder="Name"
                    required
                  />
                  <input
                    id="email"
                    type="email"
                    name="email" // Add name attribute for EmailJS
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  name="subject" // Add name attribute for EmailJS
                  placeholder="Subject"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                  required
                />
                <textarea
                  id="message"
                  name="message" // Add name attribute for EmailJS
                  rows="5"
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="hover:scale-110 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-sky-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-span-1 flex justify-center md:justify-start relative">
            <img
              src={MyImage}
              alt="MyImage"
              className="w-full max-w-xs md:max-w-full md:hidden"
            />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent md:hidden"></div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Section4;