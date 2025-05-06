import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import UtilityCard from './UtilityCard';

const utilitiesPromise = fetch('utilityProviders.json').then(res=> res.json())

const SliderUtility = () => {

    const utilitiesPRoviders = use(utilitiesPromise)
    console.log(utilitiesPRoviders);

    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                freeMode={true}
                grabCursor={true}
                keyboard={true}
                navigation={true}
                loop={true}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false,
                    }
                }
                modules={[FreeMode, Autoplay, Pagination,Navigation , Keyboard]}
                className="mySwiper"
            >
                {
                    utilitiesPRoviders.map(provider=><SwiperSlide><UtilityCard key={provider.id} provider={provider} ></UtilityCard></SwiperSlide>)
                }
            </Swiper>
        </>
    );
}
export default SliderUtility