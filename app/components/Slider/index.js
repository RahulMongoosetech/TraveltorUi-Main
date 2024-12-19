import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../TrekstersBTN';
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="absolute mt-24  md:mt-60 lg:mt-[240px] xl:mt-[400px] lg:ml-5 ">
            <Button label="Become a Treksters" />
          </div>
          <img src="/images/Frame 1.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute mt-28  md:mt-60 lg:mt-[250px] xl:mt-[420px] lg:ml-5   ">
            <Button label="Explore Trekscape" />
          </div>
          <img src="/images/Frame 2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute mt-28  md:mt-60 lg:mt-[250px] xl:mt-[430px] lg:ml-5  ">
            <Button label="Become a Treksters" />
          </div>
          <img src="/images/Frame 3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
