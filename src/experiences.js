import React from 'react';
import 'swiper/css';
import Card from './card'; // Import your Card component
import cardsData from './cardsdata'; // Your cards data
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default () => {
  return (
    <div class="swiper-container">
            <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination,Mousewheel]}
      spaceBetween={50}
      slidesPerView={1}
      mousewheel={true}
      pagination={{ clickable: true }} // Optional: Enable and configure pagination
      breakpoints={{
        320 :{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
        {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
            <Card {...card} /> 
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
};
