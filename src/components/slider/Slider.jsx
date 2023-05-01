import React, { useEffect, useState, Children, cloneElement } from 'react';

import './HorizontalSlider.scss';
import './VerticalSlider.scss';

import arrow from './../../../public/arrow-black.png'

export default function Slider({ children }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const width = isMobile ? 162.5 : 900;

  useEffect(() => {
    window.onresize = () => setIsMobile(window.innerWidth < 950);
    setImages(Children.map(children, child => (
      cloneElement(child, {
        style: {
          maxheight: '100%',
          minheight: '100%',
          minwidth: width.toString() + 'px',
          maxwidth: width.toString() + 'px'
        }
      })
    )))
  }, []);

  return (
    <div className='slider'>
      <div
        className='slider-left'
        onClick={() => setOffset(Math.max(offset - 1, 0))}>
        <img
          src={arrow}
          style={{
            height: '50px',
            transform: isMobile ? 'rotate(-90deg)' : 'rotate(180deg)'
          }} />
      </div>
      <div className='slider-window'>
        <div
          className='slider-window-container'
          style={{
            transform: isMobile ? `translateY(${(-width * offset).toString()}px)` : `translateX(${(-width * offset).toString()}px)`
          }}>
          {images}
        </div>
      </div>
      <div
        className='slider-right'
        onClick={() => setOffset(Math.min(offset + 1, 4))}>
        <img
          src={arrow}
          style={{
            height: '50px',
            transform: isMobile ? 'rotate(90deg)' : 'rotate(0)'
          }} />
      </div>
    </div>
  )
}
