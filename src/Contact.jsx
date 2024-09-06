/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32 bg-white dark:bg-slate-500">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-lg mx-auto text-center mb-16">
            <h4 className="font-semibold capitalize text-primary mb-2 text-lg">
              Contact
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Get in touch
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-200 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus
            </p>
          </div>

          <form action="">
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary capitalize"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-slate-200 text-dark focus:outline-none  rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary capitalize"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-slate-200 text-dark focus:outline-none  rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary capitalize"
                >
                  Pesan
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="h-32 bg-slate-200 text-dark focus:outline-none  rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="text-white text-base bg-primary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary font-semibold rounded-full w-full px-8 py-3 text-center hover:shadow-lg transition duration-500 ease-in-out"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
