import Button from '../Button/Button';
import logoImage from '/Images/Logo/Logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { BiTime } from 'react-icons/bi';
import { BsMicMute } from 'react-icons/bs';

function Header() {
  return (
    <header className='flex lg:justify-evenly items-center md:justify-start p-7'>
      <div className='logo'>
        <img
          className='h-[110px] w-[120px] cursor-pointer'
          src={logoImage}
          alt='logo-image'
        />
      </div>
      <div className='location lg:flex items-center gap-3 mt-8 md:hidden '>
        <div>
          <IoLocationOutline className='text-4xl text-[#FC8902]' />
        </div>
        <div>
          <h3 className='font-extrabold leading-loose'>
            MUBARRAZ Oilfield Installation
          </h3>
          <h3>Box : 9847, Abu Dhabi United Arab Emirates</h3>
        </div>
      </div>
      <div className='timing lg:flex items-center gap-3 mt-8 md:hidden '>
        <div>
          <BiTime className='text-4xl text-[#FC8902]' />
        </div>
        <div>
          <h3 className='font-extrabold leading-loose'>Mon-Sat : 8am-6pm</h3>
          <h3>Sunday : Closed</h3>
        </div>
      </div>
      <div className='info lg:flex items-center gap-3 mt-8 md:hidden '>
        <div>
          <BsMicMute className='text-4xl text-[#FC8902]' />
        </div>
        <div>
          <h3 className='font-extrabold leading-loose'>+971 25504004</h3>
          <h3>info@muboins.ae</h3>
        </div>
      </div>
      <div className='button md:hidden lg:block'>
        <Button>Get a Quote</Button>
      </div>
    </header>
  );
}

export default Header;
