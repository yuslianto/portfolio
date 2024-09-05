import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from 'react-icons/fa';

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

export { tautanLinks, sosMedLinks };