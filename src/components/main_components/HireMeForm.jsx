import React from "react";
import { useState } from "react";


const HireMeForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent"))
        .catch((error) => alert(error));
    };
    return (
        <>
            <form
          netlify
          name="contact"
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
          Thank you for taking the time to look over my portfolio website. <br/>
          Should you have any questions or would like to discuss any of my projects further, please don't hesitate to contact me using the form or email above.<br />
          You can send me a message via this form!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-150 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-150 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-slate-150 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
        </>
    )
}

export default HireMeForm;