import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import { loaderImages } from '../../../utils/loaderImages';
import Button from '../../Button/Button';

function ImageLoader() {
  return (
    <div className='image-loader relative w-full '>
      <div className='image-zoom-loader'>
        <Zoom scale={1.4} indicators={false} duration={900} arrows={false}>
          {loaderImages.map((loaderImage) => {
            const { id, image } = loaderImage;
            return (
              <div key={id} style={{ width: '100%' }}>
                <img
                  className='object-cover w-full xl:h-[100vh] 2xl:h-[40vh]'
                  style={{
                    filter: 'brightness(50%)',
                  }}
                  alt='Slider Image'
                  loading='lazy'
                  src={image}
                />
              </div>
            );
          })}
        </Zoom>
      </div>
      <div className='content absolute w-[40%] xl:top-[25%] top-[15%] z-50 pl-12 '>
        <div data-aos='fade-up' data-os-delay='1000' data-aos-duration='1000'>
          <h2 className='text-white text-3xl'>Welcome to </h2>
          <span className='text-white text-7xl leading-tight'>Mubarraz</span>
        </div>
        <p
          data-aos='fade-up'
          data-os-delay='1200'
          data-aos-duration='1200'
          className='text-white mt-2 text-xl'
        >
          Welcome to our Mubarraz Oil filed installation LLC (MOI), where we
          have provided top notch services for OIL & GAS, POWER, SENAAT, RO
          industries since 1999.
        </p>
        <Button>Our Services</Button>
      </div>
      <div className='assurability xl:flex justify-center items-center absolute xl:top-[100%] top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-full md:hidden'>
        <div className='bg-[#FC8902] pt-7 pb-4 pr-[3rem] pl-[3rem]'>
          <h2 className='text-2xl font-bold'>Puntual Delivery Time</h2>
          <h4 className='text-center leading-loose mt-2 text-lg'>
            99% Delivered On Time
          </h4>
        </div>
        <div className='bg-[#171926] text-white pt-7 pb-4 pr-[3rem] pl-[3rem] '>
          <h2 className='text-2xl font-bold'>High Technology Factory</h2>
          <h4 className='text-center leading-loose mt-2 text-lg'>
            & Environment Friendly
          </h4>
        </div>
        <div className='bg-[#5f6169] pt-7 pb-4 pr-[3rem] pl-[3rem]'>
          <h2 className='text-2xl font-bold'>High Standard Labors</h2>
          <h4 className='text-center leading-loose mt-2 text-lg'>
            99% QC Passed
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ImageLoader;
