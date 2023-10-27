import Address from '../Address/Address';

function Form() {
  return (
    <div className='form flex items-center m-8 bg-[#fffdfd] mb-24'>
      <div className='w-[60%]'>
        <h1 className='text-2xl font-medium p-[3.25rem] pb-0'>GET IN TOUCH</h1>
        <p className='p-[3.25rem] pb-0 pt-1 mt-3 leading-relaxed opacity-60'>
          Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in.
        </p>
        <form action='' className='w-full'>
          <div className='p-4 m-5 mb-0 flex'>
            <input
              className='bg-[#DCDCDC] p-4 m-2 rounded-lg w-[50%]'
              type='text'
              placeholder='Your Name'
            />
            <input
              className='bg-[#DCDCDC] p-4 m-2 rounded-lg w-[50%]'
              type='number'
              placeholder='Phone Number'
            />
          </div>
          <div className='p-4 pt-0 m-5 mb-0 mt-0 flex'>
            <input
              className='bg-[#DCDCDC] p-4 m-2 rounded-lg w-[50%]'
              type='text'
              placeholder='Your Email'
            />
            <input
              className='bg-[#DCDCDC] p-4 m-2 rounded-lg w-[50%]'
              type='text'
              placeholder='Subject'
            />
          </div>
          <div className='w-full p-[2.75rem] pt-4'>
            <textarea
              className='bg-[#DCDCDC] w-full p-6 rounded-lg'
              name=''
              placeholder='Message'
              id=''
            ></textarea>
          </div>
          <button className='p-3 rounded-lg ml-10 bg-[#FC8902]'>Submit</button>
        </form>
      </div>
      <div>
        <Address />
      </div>
    </div>
  );
}

export default Form;
