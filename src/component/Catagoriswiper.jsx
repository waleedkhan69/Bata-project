import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from 'swiper/modules';
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const Catagoriswiper = () => {
    const [picture, setpicture] = useState('')
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://dummyjson.com/products`
            const dat = await fetch(url)
            const setdata = await dat.json()
            setpicture(setdata)
        }
        fetchapi();
    }, [])
    const produ = picture.products
    return (
        <Fragment>
            <Swiper
                navigation={true}
                modules={[Navigation]}

                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}



            >

                {produ?.map((item, index) => (
                    <SwiperSlide key={index} className='flex justify-center font-semibold'>
                        <div className=' text-center bg-[#F3F3F3]'>
                            <Link> <img src={item.images[0]} alt="" className='h-48 w-full object-contain' />
                                <p>{item.title}</p>
                            </Link>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    )
}

export default Catagoriswiper