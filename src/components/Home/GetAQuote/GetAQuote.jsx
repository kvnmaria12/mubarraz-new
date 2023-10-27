import Button from '../../Button/Button';
import image from '/Images/GetAQuote/GetAQuote.jpg';

function GetAQuote() {
  return (
    <div className='get-a-quote relative w-full'>
      <div className='background-image'>
        <img
          className='2xl:h-[50vh] h-[70vh] w-full brightness-[10%]'
          src={image}
          alt='get-a-quote'
        />
      </div>
      <div className='content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-center'>
        <h1 className='text-4xl text-white leading-relaxed'>
          Innovation to take products from an idea all the way to consumer.
        </h1>
        <Button>Get a Quote</Button>
      </div>
    </div>
  );
}

export default GetAQuote;
