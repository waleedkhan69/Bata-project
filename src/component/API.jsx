import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const API = () => {
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
        <Swiper
        modules={[Autoplay]}
       
        slidesPerView={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}



    >
       
        {produ?.map((item, index) => (
            <SwiperSlide key={index} className='flex justify-center font-semibold'>
                <div>
                <img src={item.images[0]} alt="" className='h-[70vh] w-full object-contain' />

                </div>
            </SwiperSlide>
        ))}
    </Swiper>
    );
};


export default API;
