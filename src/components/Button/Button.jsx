function Button({ children }) {
  return (
    <button className='button p-3 bg-[#FC8902] text-lg font-extrabold rounded-md mt-8 hover:text-white hover:bg-[#171926] hover:rounded-md'>
      {children}
    </button>
  );
}

export default Button;
