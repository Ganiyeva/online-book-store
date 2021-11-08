import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
 
 const Slider = () => {
  SwiperCore.use([Autoplay]);

    return (
      <div>
        <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} loop autoplay={{delay: 5000, disableOnInteraction: false}}>
          <SwiperSlide>
            <img src="img/slide1.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
 };
 
 export default Slider;