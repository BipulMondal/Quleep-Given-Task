import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='absolute z-50'>
      <NavLink to={"/"}>
      <h2 className='font-bold ml-[8rem] text-white'>
        <span className='text-3xl text-yellow-300 mr-[0.1rem] '>Q</span>uleep
        </h2>
      </NavLink>
    </div>
    <div className='flex justify-end bg-blue-700 h-[3rem] w-full space-x-36 z-0 pr-[10rem] font-bold items-center relative'>
        <NavLink to={"/"}>
            <div className='h-[2rem] w-[6rem] border border-2 border-yellow-100 text-white hover:text-black hover:bg-yellow-200 flex items-center justify-center rounded-full'>
            <h6 className=''>Home</h6>
            </div>
        </NavLink>
        <NavLink to={"/addproduct"}>
            <div className='h-[2rem] w-[9rem] border border-2 border-yellow-100 text-white hover:text-black hover:bg-yellow-200 flex items-center justify-center rounded-full'>
            <h6 className=''>Become a Seller</h6>
            </div>
        </NavLink>
    </div>
    </>
  )
}

export default Navbar