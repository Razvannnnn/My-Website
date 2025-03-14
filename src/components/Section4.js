import React from "react";
import MyImage from '../images/IMG_1907.png'

const Section4 = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="col-span-1 flex justify-center md:justify-start">
                    <img src={MyImage} alt="MyImage" className="w-full max-w-xs md:max-w-full"/>
                </div>
                <div className="col-span-2">
                    <h1 className="text-gray-400 text-center pb-8 text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
                    <form className="flex flex-col items-center">
                        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-full">
                            <div className="flex flex-col md:flex-row">
                                <input id="name" type="text"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                                    placeholder="Name"></input>
                                <input id="email" type="email"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
                                    placeholder="Email"></input>
                            </div>
                            <input id="subject" type="text" placeholder="Subject"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out">
                            </input>
                            <textarea id="message" rows="5" placeholder="Say Something"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"></textarea>
                        </div>
                        <button
                            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-sky-500 hover:bg-sky-500 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section4;