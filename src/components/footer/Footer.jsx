import React from 'react';

import "./Footer.scss";

export default function Footer() {

  return (
    <footer className='footer'>
      <div className='footer-left'>
        <p>Made with React with ❤️ by <a href='https://github.com/DEsimas' target="_blank" rel="noopener noreferrer">DEsimas</a></p>
        <p>Some text...</p>
      </div>
      <div className='footer-right'>
        <img src='https://avatars.githubusercontent.com/u/61614415?s=96&v=4' alt='logo'></img>
      </div>
    </footer>
  );
}

