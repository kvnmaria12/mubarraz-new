import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='h-20 bg-[#171926] text-white flex items-center justify-between sticky'>
      <nav className='navbar ml-16'>
        <ul className='flex'>
          <NavLink to='/' className='p-3 cursor-pointer hover:text-[#FC8902]'>
            Home
          </NavLink>
          <NavLink className='p-3 cursor-pointer hover:text-[#FC8902]'>
            About Us
          </NavLink>
          <NavLink className='p-3 cursor-pointer hover:text-[#FC8902]'>
            Services
          </NavLink>
          <NavLink className='p-3 cursor-pointer hover:text-[#FC8902]'>
            Projects
          </NavLink>
          <NavLink className='p-3 cursor-pointer hover:text-[#FC8902]'>
            Career
          </NavLink>
          <NavLink
            to='/contact'
            className='p-3 cursor-pointer hover:text-[#FC8902]'
          >
            Contact
          </NavLink>
        </ul>
      </nav>
      <div className='social-media flex gap-5 mr-10 '>
        <BiLogoFacebook className='text-2xl cursor-pointer hover:text-[#FC8902]' />
        <BiLogoTwitter className='text-2xl cursor-pointer hover:text-[#FC8902]' />
        <BiLogoInstagramAlt className='text-2xl cursor-pointer hover:text-[#FC8902]' />
        <BiLogoLinkedinSquare className='text-2xl cursor-pointer hover:text-[#FC8902]' />
      </div>
    </div>
  );
}

export default NavBar;
