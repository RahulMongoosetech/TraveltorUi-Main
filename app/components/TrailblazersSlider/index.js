import React from 'react';
import PropTypes from 'prop-types';
import CardC from '../TrailblazersCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import TrailblazersCards from '../TrailblazersCards';

const TrailblazersSlider = () => {
  const cardData = [
    {
      id: 1,
      tittleC: 'Dan Flying',
      imgC: '/images/DayFlying.png',
    },
    {
      id: 2,
      tittleC: 'The Blonde',
      imgC: '/images/Blonde.png',
    },
    {
      id: 3,
      tittleC: 'Gloria',
      imgC: '/images/Gloria.png',
    },
    {
      id: 4,
      tittleC: 'Steph Be',
      imgC: '/images/Steph.png',
    },

    {
      id: 5,
      tittleC: 'Nomadic Boys',
      imgC: '/images/Blonde.png',
    },
  ];

  return (
    <div className="w-[100%]  max-w-[100vw] ">
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
            slidesPerView: 2.5,
            spaceBetween: -60,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: -40,
          },
          1280: {
            slidesPerView: 4.6,
            spaceBetween: -40,
          },
        }}
        className="mySwiper"
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <TrailblazersCards imgC={item.imgC} tittleC={item.tittleC} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

CardC.propTypes = {
  imgC: PropTypes.string.isRequired,
  tittleC: PropTypes.string.isRequired,
};

export default TrailblazersSlider;
