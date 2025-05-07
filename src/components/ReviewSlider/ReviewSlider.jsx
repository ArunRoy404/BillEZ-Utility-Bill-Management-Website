import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';
import Review from '../Review';
import { testimonials } from '../../utilities/data';


const ReviewSlider = () => {

    return (
        <div className='w-[80%] mx-auto'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={
                    {
                        delay: 2500,
                        disableOnInteraction: false,
                    }
                }
                modules={[EffectCards, Autoplay]}
                className="mySwiper"
            >
                {
                    testimonials.map((testimonial, index) => <SwiperSlide><Review key={index} testimonial={testimonial}></Review></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;

