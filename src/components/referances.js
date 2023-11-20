import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Referances = () => {
  const logos = [
    'https://anibalbilisim.com/assets/polytime-01-7bfa9022.svg',
    'https://anibalbilisim.com/assets/mks-01-9e3f6889.svg',
    'https://anibalbilisim.com/assets/time-01-59abcfc6.svg',
    'https://anibalbilisim.com/assets/alternatif-01-e04bd065.svg',
    'https://anibalbilisim.com/assets/sugar-01-b13902c2.svg',
    'https://anibalbilisim.com/assets/global-01-42805fe0.svg',
    'https://anibalbilisim.com/assets/doludizgin-01-4b8b1751.svg',
  ];

  return (
    <div className="referances">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index}`} className="referance-img" />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
};

export default Referances;
