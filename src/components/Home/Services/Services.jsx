import Button from '../../Button/Button';
import service1 from '/Images/Services/Service1.jpg';
import service2 from '/Images/Services/Service2.jpg';
import service3 from '/Images/Services/Service3.jpg';
import service4 from '/Images/Services/Service4.jpg';
import service5 from '/Images/Services/Service5.jpg';

function Services() {
  return (
    <div className='services flex p-12 bg-slate-50'>
      <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2'>
        <div
          data-aos='fade-up'
          data-os-delay='1200'
          data-aos-duration='1200'
          className='m-6'
        >
          <h2 className='text-3xl font-semibold border-b-2 border-[#FC8902] inline'>
            What We Do
          </h2>
          <p className='leading-relaxed mt-9 opacity-70'>
            MOI Vision is committed to providing the highest level of quality
            and safety when it comes to troubleshooting in every project we
            undertake.
          </p>
          <p className='leading-relaxed mt-7 opacity-70'>
            Mubarraz offers list of services available
          </p>
          <Button>View All Services</Button>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1400'
          data-aos-duration='1400'
          className='p-6'
        >
          <div>
            <img src={service1} alt='service-image-1' />
            <h2 className='text-2xl font-bold mt-8'>
              ACTUATOR & GEARBOX SERVICING
            </h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              MOI offers servicing actuators and gearboxes that are used to
              operate valves.
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1600'
          data-aos-duration='1600'
          className='p-6'
        >
          <div>
            <img src={service2} alt='service-image-2' />
            <h2 className='text-2xl font-bold mt-8'>VALVE AUTOMATION</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              Our service involves automating valves using different types of
              actuators, such as electric, pneumatic, or hydraulic actuators
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='1800'
          data-aos-duration='1800'
          className='p-6'
        >
          <div>
            <img src={service3} alt='service-image-3' />
            <h2 className='text-2xl font-bold mt-8'>VALVE ASSET MANAGEMENT</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              MOI can also provide services that involve managing the lifecycle
              of valves, including installation, commissioning, operation,
              maintenance.
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='2000'
          data-aos-duration='2000'
          className='p-6'
        >
          <div>
            <img src={service4} alt='service-image-4' />
            <h2 className='text-2xl font-bold mt-8'>
              ONSITE REPAIR & TESTING OF VALVES
            </h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              MOI service involves onsite repair and testing of valves, and it
              can perform at the customer's location and can include repair,
              maintenance, and testing of different types of valves
            </p>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='2200'
          data-aos-duration='2200'
          className='p-6'
        >
          <div>
            <img src={service5} alt='service-image-5' />
            <h2 className='text-2xl font-bold mt-8'>CRYOGENIC VALVE TESTING</h2>
            <p className='leading-relaxed mt-3 opacity-70'>
              Pressure testing valves is crucial to ensuring that they can
              resist high temperatures and perform as intended when used in
              low-temperature applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
