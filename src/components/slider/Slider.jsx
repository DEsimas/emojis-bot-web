import React, { useEffect, useState, Children, cloneElement } from 'react';

import './Slider.scss';

import arrow from './../../../public/arrow-black.png'

export default function Slider({ children }) {
  const width = 1000;
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setImages(Children.map(children, child => (
      cloneElement(child, {
        style: {
          height: '100%',
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
            transform: 'rotate(180deg)'
          }} />
      </div>
      <div className='slider-window'>
        <div
          className='slider-window-container'
          style={{
            transform: `translateX(${(-width * offset).toString()}px)`
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
            height: '50px'
          }} />
      </div>
    </div>
  )
}
