/* eslint-disable no-unused-vars */
import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const clientsLinks = [
  {
    key: 1,
    name: 'instagram',
    icon: (
      <FaInstagram className=" text-primary hover:scale-125 transition duration-300 ease-in-out" />
    ),
    link: 'https://www.instagram.com/',
  },
  {
    key: 2,
    name: 'linkedin',
    icon: (
      <FaLinkedin className=" text-primary hover:scale-125 transition duration-300 ease-in-out" />
    ),
    link: 'https://www.linkedin.com/',
  },
  {
    key: 3,
    name: 'youtube',
    icon: (
      <FaYoutube className=" text-primary hover:scale-125 transition duration-300 ease-in-out" />
    ),
    link: 'https://www.youtube.com/',
  },
];
const Clients = () => {
  return (
    <section className="pt-36 pb-32 bg-slate-700" id="clients">
      <div className="container max-w-screen-lg">
        <div className="w-full px-4">
          <div className="mb-16 mx-auto text-center">
            <h4 className="font-semibold capitalize text-primary mb-2 text-lg">
              Clients
            </h4>
            <h2 className="font-bold capitalize text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang pernah bekerjasama
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              cum a rem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laboriosam, dolorum?
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap items-center justify-center">
          {clientsLinks.map((clients) => (
            <a
              href={clients.link}
              key={clients.key}
              className="text-5xl mx-4 py-4 grayscale opacity-60 hover:grayscale-0 transition duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              {clients.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
