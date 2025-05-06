import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination, EffectCreative } from 'swiper/modules';
import SliderBanner from './SliderBanner';

const carousalDataPromise = fetch('carousal.json').then(res => res.json())


const Slider = () => {

    const carousalData = use(carousalDataPromise)
    console.log(carousalData);


    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            // effect={'fade'}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectCreative, EffectFade, Autoplay, Pagination]}
            className="mySwiper w-[90%]"
        >
            {
                carousalData.map(data=> <SwiperSlide><SliderBanner key={data.id} data={data}></SliderBanner></SwiperSlide>)
            }
        </Swiper>
    );
};
export default Slider;