import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';
import testimonials from '../../utilities/testimonials';
import Review from '../Review';


const ReviewSlider = () => {

    return (
        <div>
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

