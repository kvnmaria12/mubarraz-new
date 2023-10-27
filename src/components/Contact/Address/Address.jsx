import { IoLocationOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';

function Address() {
  return (
    <div className='contact-address bg-[#171926] p-10 pr-2 ml-9 rounded-md '>
      <div className='flex items-center gap-4 p-3'>
        <div>
          <IoLocationOutline className='text-[#FC8902] text-3xl' />
        </div>
        <div>
          <h2 className='text-white text-2xl'>VISIT US</h2>
          <h4 className='text-[#FC8902] mt-2'>
            Box : 9847, Abu Dhabi United Arab Emirates
          </h4>
        </div>
      </div>
      <div className='flex items-center gap-4 p-3'>
        <div>
          <LuContact className='text-[#FC8902] text-3xl' />
        </div>
        <div>
          <h2 className='text-white text-2xl'>CALL US</h2>
          <h4 className='text-[#FC8902] mt-2'>+971 25504004</h4>
        </div>
      </div>
      <div className='flex items-center gap-4 p-3'>
        <div>
          <HiOutlineMail className='text-[#FC8902] text-3xl' />
        </div>
        <div>
          <h2 className='text-white text-2xl'>MAIL US</h2>
          <h4 className='text-[#FC8902] mt-2'>info@muboins.ae</h4>
        </div>
      </div>
    </div>
  );
}

export default Address;
