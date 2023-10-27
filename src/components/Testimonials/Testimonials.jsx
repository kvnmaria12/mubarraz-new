import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { testimonials } from '../../utils/testimonials';

function Testimonials() {
  return (
    <div className='testimonials'>
      <Splide
        options={{
          perPage: 6,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '1rem',
        }}
      >
        {testimonials.map((testimonail) => {
          const { id, image } = testimonail;
          return (
            <SplideSlide key={id}>
              <div className='p-7'>
                <img src={image} alt='testimonial images' />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Testimonials;
