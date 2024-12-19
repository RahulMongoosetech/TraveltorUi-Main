import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import TrekscapesCards from '../TrekscapesCards';
const TrekscapesSlider = () => {
  const cardData = [
    {
      id: 1,
      img: './images/Ram.png',
      tittle: 'Ram Van Gaman Track',
      Trail: '25 Trail Spots',
      Treksters: '15,689 Treksters',
    },
    {
      id: 2,
      img: './images/Gaumukh.png',
      tittle: 'Goumukh Tapovan Trek',
      Trail: '16 Trail Spots',
      Treksters: '10,689 Treksters',
    },
    {
      id: 3,
      img: './images/Mumbai.png',
      tittle: 'Mumbai Adventures',
      Trail: '25 Trail Spots',
      Treksters: '15,689 Treksters',
    },
    {
      id: 4,
      img: './images/party.png',
      tittle: 'Kasol Party',
      Trail: '25 Trail Spots',
      Treksters: '',
    },
  ];

  return (
    <div className=" w-full xl:h-[510px] max-w-[100vw]">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.6,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <TrekscapesCards
              img={item.img}
              tittle={item.tittle}
              Trail={item.Trail}
              Treksters={item.Treksters}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrekscapesSlider;
