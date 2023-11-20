import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const logos = [
    'https://demo.anibalbilisim.com/gorsel/beyaz4.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz1.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz5.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz2.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz6.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz3.svg',
    'https://demo.anibalbilisim.com/gorsel/beyaz5.svg',
];

function SliderReferences() {
  return (
    <div className="slider-references-wrapper container mb-4">
      <div className="slider-references ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {logos.map((logoUrl, index) => (
            <SwiperSlide key={index}>
              <img src={logoUrl} alt={`Logo ${index + 1}`} className="reference-imgs" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default SliderReferences;