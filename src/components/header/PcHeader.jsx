import React from 'react';
import { Link } from 'react-router-dom';

import './PcHeader.scss';

export default function PcHeader() {
  return (
    <div className='header-pc'>
      <div className='header-pc-left'>
        <div className='header-pc-left-link'>
          <Link className='header-pc-left-link-route' to='/home'>
            <span className='header-pc-left-link-text'>EmojisBot</span>
          </Link>
        </div>
        <div className='header-pc-left-button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://discord.com/api/oauth2/authorize?client_id=883020186339397693&permissions=26933136456768&scope=bot'
            className='header-pc-left-button-link'
          >Добавить на сервер!</a>
        </div>
      </div>
      <div className='header-pc-right'>
        <Link className='header-pc-right-element' to='/home'>
          <span className='header-pc-right-element-span'>Главная</span>
        </Link>
        <Link className='header-pc-right-element' to='/images'>
          <span className='header-pc-right-element-span'>Как оно выглядит?</span>
        </Link>
        <Link className='header-pc-right-element' to='/calculator'>
          <span className='header-pc-right-element-span'>Калькулятор ¯\_(ツ)_/¯</span>
        </Link>
      </div>
    </div>
  );
}
