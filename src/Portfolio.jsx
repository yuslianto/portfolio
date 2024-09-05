/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const myPortfolio = [
  {
    image: 'https://picsum.photos/800/600?random=1',
    title: 'Project One',
    description:
      "This is the description for Project One. It includes details about the project's features, technologies used, and outcomes.",
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    title: 'Project Two',
    description:
      'This is the description for Project Two. It focuses on the goals achieved and the impact of the project.',
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Project Three',
    description:
      'This is the description for Project Three. It highlights the challenges faced and how they were overcome.',
  },
  {
    image: 'https://picsum.photos/800/600?random=4',
    title: 'Project Four',
    description:
      'This is the description for Project Four. It covers the innovative solutions and technologies implemented.',
  },
  {
    image: 'https://picsum.photos/800/600?random=5',
    title: 'Project Five',
    description:
      'This is the description for Project Five. It showcases the project timeline and milestones achieved.',
  },
];

const PortfolioCard = ({ image, title, description }) => {
  return (
    <div className="bg-white hover:scale-110 transition duration-300 ease-in-out rounded-lg shadow-md overflow-hidden m-2 md:w-2/5 dark:bg-slate-100">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{title}</h3>
        <p className="text-secondary font-medium text-base line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id='portfolio' className="pt-36 pb-32 bg-slate-50 dark:bg-slate-600">
      <div className="container max-w-screen-lg">
        <div className="w-full px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <h4 className="font-semibold capitalize text-primary mb-2 text-lg">
              Portfolio
            </h4>
            <h2 className="dark:text-slate-200 font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project terbaru saya
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg dark:text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              cum a rem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laboriosam, dolorum?
            </p>
          </div>
          <div className="w-full gap-2 flex flex-wrap justify-center xl:width-10/12">
            {myPortfolio.map((portfolio) => (
              <PortfolioCard
                key={portfolio.title}
                image={portfolio.image}
                title={portfolio.title}
                description={portfolio.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
