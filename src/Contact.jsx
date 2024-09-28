/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState('');

  let waNumber = '081354615019';

  // Fungsi untuk mengirim pesan ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = waNumber.startsWith('62')
      ? waNumber
      : `62${waNumber.slice(1)}`;
    // Buat URL WhatsApp
    const urlWA = `https://wa.me/${phone}?text=Halo, nama saya ${name}. ini nomor wa saya ${number}. Pesan saya: ${message}`;

    // Arahkan ke WhatsApp
    window.open(urlWA, '_blank');

    // Reset form
    setEmail('');
    setName('');
    setNumber('');
    setMessage('');
  };

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

          <form action="" onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-200 text-dark focus:outline-none  rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary capitalize"
                >
                  No. Telp
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="bg-slate-200 text-dark focus:outline-none  rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5"
                  placeholder="Insert Phone Number"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
