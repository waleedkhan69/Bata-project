// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NavSwiper = () => {
    const Navarry = [
        { headline: "Delivery charges Rs:100 will be charged on all Order" },
        { headline: "No return or Exchange after the comfermation" },
        { headline: "Delivery services will be free" },
    ];

    return (
        <Swiper
            modules={[Autoplay]}
           
            slidesPerView={1}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}



        >
            {/* Correctly mapping each item to a SwiperSlide */}
            {Navarry.map((item, index) => (
                <SwiperSlide key={index} className='flex justify-center font-semibold'>
                    <div>
                        <p>{item.headline}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NavSwiper;
