import {
  LiaAwardSolid,
  LiaBusinessTimeSolid,
  LiaBezierCurveSolid,
  LiaPeopleCarrySolid,
} from 'react-icons/lia';

function About() {
  return (
    <div className='about flex p-12 bg-slate-50 xl:mt-28 xl:mb-14'>
      <div
        data-aos='fade-right'
        data-os-delay='1200'
        data-aos-duration='1200'
        className='w-[60%] m-6'
      >
        <h2 className='text-3xl font-bold'>Welcome to Mubarraz</h2>
        <p className='leading-relaxed mt-9 opacity-70'>
          Welcome to our Mubarraz Oil filed installation LLC (MOI), where we
          have provided top notch services for OIL & GAS, POWER, SENAAT, RO
          industries since 1999.
        </p>
        <p className='leading-relaxed mt-7 opacity-70'>
          Our company is committed to providing the highest level of quality and
          safety when it comes to troubleshooting in every project we undertake.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div
          data-aos='fade-up'
          data-os-delay='1400'
          data-aos-duration='1400'
          className='flex justify-center items-start  gap-3  p-6'
        >
          <div>
            <LiaAwardSolid className='text-4xl text-[#FC8902]' />
          </div>
          <div>
            <h2 className='text-2xl  font-bold'>Easy and Affordable</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              Experience the future of the oil industry with our easy and
              affordable solutions.
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1400'
          data-aos-duration='1400'
          className='flex justify-center items-start gap-3  p-6'
        >
          <div>
            <LiaBusinessTimeSolid className='text-4xl text-[#FC8902]' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Punctual Delivery time</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              At Mubarraz, we understand the critical importance of delivering
              oil products on time.
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1200'
          data-aos-duration='1200'
          className='flex justify-center items-start gap-3  p-6'
        >
          <div>
            <LiaBezierCurveSolid className='text-4xl text-[#FC8902]' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Smart Technology</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              Our innovative solutions leverage and automate to optimize
              operations, increase safety, and enhance efficiency.
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1300'
          data-aos-duration='1300'
          className='flex justify-center items-start gap-3  p-6'
        >
          <div>
            <LiaPeopleCarrySolid className='text-4xl text-[#FC8902]' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Team Of Professionals</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              At Mubarraz, our oil industry success is fueled by our exceptional
              team of professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
