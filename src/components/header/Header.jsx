import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './PcHeader.scss';
import './MobileHeader.scss';

import Arrow from './../../../public/arrow.png';

export default function Header() {
  const [page, setPage] = useState('Главная');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setCollapsed(true);
  }, [page]);

  return (
    <header className='header'>
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
      <div className='header-mobile'>
        <div className='header-mobile-value'>
          <h2 className='header-mobile-value-header'>{page}</h2>
          <img
            onClick={() => setCollapsed(!collapsed)}
            className='header-mobile-arrow'
            src={Arrow}
            style={{
              transform: collapsed ? 'rotate(180deg)' : 'rotate(90deg)',
              transition: 'transform 150ms ease',
            }}
          />
        </div>
        <div
          className='header-mobile-list'
          style={{ display: collapsed ? 'none' : 'block' }}>
          <Link onClick={() => setPage('Главная')} className='header-mobile-list-element' to='/home'>
            <span className='header-mobile-list-element-span'>Главная</span>
          </Link>
          <Link onClick={() => setPage('Как оно выглядит?')} className='header-mobile-list-element' to='/images'>
            <span className='header-mobile-list-element-span'>Как оно выглядит?</span>
          </Link>
          <Link onClick={() => setPage('Калькулятор')} className='header-mobile-list-element' to='/calculator'>
            <span className='header-mobile-list-element-span'>Калькулятор ¯\_(ツ)_/¯</span>
          </Link>
          <div className='header-mobile-list-button'>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href='https://discord.com/api/oauth2/authorize?client_id=883020186339397693&permissions=26933136456768&scope=bot'
              className='header-mobile-list-button-link'
            >Добавить на сервер!</a>
          </div>
        </div>
      </div>
    </header>
  );
}
