import React, { useState } from 'react';
import OrbitMenu from './orbitMenu';
import SliderNavbar from './sliderNavbar';
import SliderReferences from './sliderReferances';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderContents = [
    { title: 'Slider 1', content: 'Bilgi Al', image: 'https://demo.anibalbilisim.com/gorsel/slider.png' },
    { title: 'Slider 2', content: 'Bilgi Ver', image: 'https://demo.anibalbilisim.com/gorsel/slider2.png' },
    { title: 'Slider 3', content: 'Bilgi Ver', image: 'https://demo.anibalbilisim.com/gorsel/slider.png' },
  ];

  const handleSelectedChange = (index) => {
    setActiveIndex(index);
  };

  const activeContent = sliderContents[activeIndex];
  const backgroundImage = activeContent.image;

  return (
    <>
      <div className="slider full-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='slider-gradient'></div>
        <SliderNavbar/>
        <OrbitMenu onSelectedChange={handleSelectedChange} sliderContents={sliderContents}/>
        <div className="slider-content">
          <h1 className='mb-4'>{activeContent.title}</h1>
          <a href='#'>{activeContent.content}</a>
        </div>
        <SliderReferences />
      </div>
    </>
  );
}

export default Slider;