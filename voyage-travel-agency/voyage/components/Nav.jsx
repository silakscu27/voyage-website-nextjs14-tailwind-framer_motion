import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';

const links = [
   {
      path: 'home',
      name: 'Anasayfa',
      offset: -50,
   },
   {
      path: 'menu',
      name: 'Turlar',
      offset: -50,
   },
   {
      path: 'about',
      name: 'Hakkında',
      offset: -150,
   },
   {
      path: 'contact',
      name: 'İletişim',
      offset: 0,
   },
];

const Nav = ({ containerStyles, linkStyles }) => {
   const [activeLink, setActiveLink] = useState('');

   const handleClick = (link) => {
      setActiveLink(link.path);
      window.history.pushState(null, '', `/${link.path}`);
      scroller.scrollTo(link.path, {
         duration: 500,
         delay: 0,
         smooth: 'easeInOutQuart',
      });
   };

   return (
      <nav className={`${containerStyles}`}>
         {links.map((link, index) => (
            <Link
               key={index}
               activeClass='active'
               to={link.path}
               spy={true}
               smooth={true}
               offset={link.offset}
               duration={500}
               className={`${linkStyles} ${link.path === activeLink ? 'active' : ''}`}
               onClick={() => handleClick(link)}
            >
               {link.name}
            </Link>
         ))}
      </nav>
   );
};

export default Nav;