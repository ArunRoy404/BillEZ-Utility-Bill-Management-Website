import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            // effect={'fade'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}

            modules={[EffectFade,Autoplay,Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><div className='border-2 h-100 bg-red-700'>slide 1</div></SwiperSlide>
            <SwiperSlide><div className='border-2 h-100 bg-blue-700'>slide 1</div></SwiperSlide>
            <SwiperSlide><div 
      className="relative h-[500px] flex items-center justify-center text-white bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

      {/* Slide Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Pay Your Utility Bills in One Click
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Fast. Secure. Hassle-Free.
        </p>
        <a
          href="/bills"
          className="inline-block bg-[#FF6D00] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
};
export default Slider;