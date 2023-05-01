import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='hader-pc'>
        <div className='header-pc-left'>
          <Link className='header-bc-left-link' to='/home'>
            <span className='header-bc-left-link-text'>EmojisBot</span>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://discord.com/api/oauth2/authorize?client_id=883020186339397693&permissions=26933136456768&scope=bot'
            className='header-bc-left-button'
          >Добавить на сервер!</a>
        </div>
        <div className='header-pc-right'>
          <Link className='header-pc-right-home' to='/home'>Главная</Link>
          <Link className='header-pc-right-images' to='/images'>Как оно выглядит?</Link>
          <Link className='header-pc-right-calculator' to='/calculator'>Калькулятор ¯\_(ツ)_/¯</Link>
        </div>
      </div>
      <div className='header-mobile'>

      </div>
    </header>
  );
}
