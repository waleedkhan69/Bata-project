import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pic from "../Bataimages/crem.avif"

const CatagoriAPI = () => {
    const [catagori, setcatagori] = useState('')
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://dummyjson.com/products`
            const data = await fetch(url)
            const prodductdata = await data.json()
            setcatagori(prodductdata)
        }
        fetchapi()
    }, [])
    const productdata = catagori.products
    const secondprduct = productdata?.slice(0, 6)


    return (
        <Fragment>
            <div className='flex justify-evenly flex-wrap gap-7 items-end  w-[100%] '>
                {secondprduct?.map((item, index) => {
                    return <div key={index} className='w-40 h-40 md:w-60 md:h-60  lg:h-80 lg:w-80 overflow-hidden  bg-[#F3F3F3]  '>
                        <Link> <img src={item.images[0]} alt="" className='w-full  transition-all hover:scale-125  h-full object-contain' /></Link>
                    </div>
                })}
            </div>
            <div className='relative'>
                <img src={pic} alt=" " className=' h-[80vh] w-[100vw] object-cover ' />
                {/* <button className='bg-[#F3F3F3] hover:bg-gray-700 hover:text-white px-4 py-2 rounded-full absolute left-[700px] bottom-20 flex justify-center items-center'>Shope Now</button> */}

            </div>
        </Fragment>
    )
}

export default CatagoriAPI