/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const myBlog = [
  {
    image: 'https://picsum.photos/800/600?random=1',
    title: 'Understanding JavaScript Closures',
    description:
      'A deep dive into JavaScript closures, exploring their use cases and how they work under the hood.',
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    title: 'Mastering React Hooks',
    description:
      'An extensive guide on React hooks, covering useState, useEffect, and custom hooks for optimal state management.',
  },
  {
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Introduction to TypeScript',
    description:
      "A beginner's guide to TypeScript, explaining the benefits of static typing in JavaScript applications.",
  },
  {
    image: 'https://picsum.photos/800/600?random=4',
    title: 'Building REST APIs with Node.js',
    description:
      'Step-by-step tutorial on creating RESTful APIs using Node.js and Express, including routing and middleware.',
  },
  {
    image: 'https://picsum.photos/800/600?random=5',
    title: 'CSS Grid Layout: A Complete Guide',
    description:
      'A comprehensive guide to CSS Grid Layout, demonstrating its capabilities for creating responsive web designs.',
  },
];

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
        <img src={image} alt="" />
        <div className="py-8 px-6">
          <h3>
            <a
              href="#"
              className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
            >
              {title}
            </a>
          </h3>
          <p className="font-medium text-base text-secondary mb-4 line-clamp-2">
            {description}
          </p>
          <a
            href=""
            className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 capitalize"
          >
            baca selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-600">
      <div className="container">
        <div className="w-full px-4">
          <div className="mb-16 max-w-lg mx-auto text-center">
            <h4 className="font-semibold capitalize text-primary mb-2 text-lg">
              blog
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan terkini
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus a iure animi? Fugit, magni iste.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {myBlog.map((blog) => (
              <BlogCard
                key={blog.title}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
