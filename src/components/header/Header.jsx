import React from 'react';

import PcHeader from './PcHeader.jsx';
import MobileHeader from './MobileHeader.jsx';

export default function Header() {

  return (
    <header className='header'>
      <PcHeader />
      <MobileHeader />
    </header>
  );
}
