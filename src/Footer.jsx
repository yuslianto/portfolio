/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

const sosMedLinks = [
  {
    key: 1,
    name: 'instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    key: 2,
    name: 'linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/',
  },
  {
    key: 3,
    name: 'facebook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/',
  },
  {
    key: 4,
    name: 'whatsapp',
    icon: <FaWhatsapp />,
    link: 'https://www.whatsapp.com/',
  },
  {
    key: 5,
    name: 'github',
    icon: <FaGithub />,
    link: 'https://www.github.com/',
  },
];

const tautanLinks = [
  {
    key: 1,
    name: 'beranda',
    icon: 'Home',
    link: 'home',
  },
  {
    key: 2,
    name: 'tentang saya',
    icon: 'About',
    link: 'about',
  },
  {
    key: 3,
    name: 'Portfolio',
    icon: 'Portfolio',
    link: 'portfolio',
  },
  {
    key: 4,
    name: 'Clients',
    icon: 'Clients',
    link: 'clients',
  },
  {
    key: 5,
    name: 'Blog',
    icon: 'Blog',
    link: 'blog',
  },
  {
    key: 6,
    name: 'Contact',
    icon: 'Contact',
    link: 'contact',
  },
];

const kategoriLinks = [
  {
    key: 1,
    name: 'react JS',
    icon: 'React',
    link: 'react',
  },
  {
    key: 2,
    name: 'next JS',
    icon: 'Next',
    link: 'next',
  },
  {
    key: 3,
    name: 'node JS',
    icon: 'Node',
    link: 'node',
  },
  {
    key: 4,
    name: 'javascript',
    icon: 'Javascript',
    link: 'javascript',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="pt-32 pb-12 bg-slate-700">
      <div className="container max-w-screen-lg">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="text-4xl text-white font-bold mb-5">
              Yuslianto Dev
            </h2>
            <h3 className="text-2xl mb-2 font-bold ">React Developer</h3>
            <p>Jln. Jendral Sudirman</p>
            <p>Indonesia</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/3">
            <h2 className="text-xl text-white font-semi-bold mb-5">
              Kategori Tulisan
            </h2>
            <ul className="text-slate-300">
              {kategoriLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.link}
                    className="capitalize inline-block text-base hover:text-primary mb-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/3">
            <h2 className="text-xl text-white font-semi-bold mb-5">Tautan</h2>
            <ul className="text-slate-300">
              {tautanLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={`#${link.link}`}
                    className="capitalize inline-block text-base hover:text-primary mb-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="w-full px-4 mb-12 pt-10 border-t border-slate-700">
          <div className="flex justify-center items-center mb-5 gap-4 text-slate-300">
            {sosMedLinks.map((social) => (
              <a
                key={social.key}
                href={social.link}
                className="text-2xl transition duration-300 ease-in-out w-10 h-10 rounded-full flex justify-center items-center border border-slate-400  hover:border-primary hover:bg-primary hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="font-medium text-xs text-stone-500 text-center">
            &copy; {year} Dibuat oleh{' '}
            <a
              target="_blank"
              href="https://github.com/yuslianto"
              className="text-primary"
            >
              Yuslianto
            </a>{' '}
            menggunakan{' '}
            <a
              target="_blank"
              href="https://reactjs.org/"
              className="text-primary"
            >
              React JS
            </a>{' '}
            dan{' '}
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="text-primary"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
