import React from 'react';

import Slider from '../../components/slider/Slider.jsx';

import './Images.scss';

import image1 from './../../../public/slider/1.png';
import image2 from './../../../public/slider/2.png';
import image3 from './../../../public/slider/3.png';
import image4 from './../../../public/slider/4.png';
import image5 from './../../../public/slider/5.png';

export default function Images() {

  return (
    <main className='images'>
      <h3 className='images-header'>Вы только посмотрите, как же этот бот хорош!</h3>
      <div className='images-slider'>
        <Slider >
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
        </Slider>
      </div>
    </main>
  );
}
