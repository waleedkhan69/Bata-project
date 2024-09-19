import React, { Fragment } from 'react'
import log from "../Bataimages/betlogo.jpeg"

const Signupfrom = () => {
  return (
    <Fragment >
        <div className='bg-[#F3F3F3] h-40 mt-7  flex justify-evenly items-center flex-col md:flex-row lg:flex-row'>
            <div className='h-20 w-20 '><img src={log} alt="" className='h-full w-full object-contain rounded-full' /></div>
            <div className='flex flex-col'>
                <h1 className='text-black font-semibold'>Signup</h1>
                <input type="search" placeholder='Enter Here to Search' className='outline-none w-72 sm:w-80 md:w-96 lg:w-[650px]  p-4' />
            </div>
          
                <button className='bg-black px-5 py-2  text-white'>Join</button>
          
        </div>
    </Fragment>
  )
}

export default Signupfrom