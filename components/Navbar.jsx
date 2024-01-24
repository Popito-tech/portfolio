'use client';
import styles from '../styles'

const Navbar = () => (
  <div className='fixed w-full z-50 bg-white'>
  <nav className='sm:px-16 px-6 pt-6 pb-5 top-0 w-full mx-auto flex sm:justify-between 
  gap-8 shadow relative'>

      <p className='font-bold text-2xl -mt-1 hidden sm:block'>Giovanni.dev</p>

    {/* <div className='text-black flex flex-row ite space-x-9 font-extrabold'>
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section1">Home</a></p>
      <p  className='hover:text-blue-500 hover:cursor-pointer'><a href="#section2">About</a></p>
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section3">Projects</a></p>
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section4">Contact</a></p>
    </div> */}
    <div className="w-screen flex justify-center items-center sm:items-end sm:justify-end gap-10 text-black font-extrabold">
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section1">Home</a></p>
      <p  className='hover:text-blue-500 hover:cursor-pointer'><a href="#section2">About</a></p>
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section3">Projects</a></p>
      <p className='hover:text-blue-500 hover:cursor-pointer'><a href="#section4">Contact</a></p>
    </div>
  
  </nav>
  <div className='child'/>
  </div>
);

export default Navbar;
