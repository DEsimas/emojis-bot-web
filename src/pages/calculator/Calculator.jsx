import React from 'react';
import Calc from '../../components/calculator/Calculator.jsx';

import './Calculator.scss';

export default function Calculator() {

  return (
    <main className='calculator'>
      <h3 className='calculator-header'>Зачем тут калькулятор? Я не знаю.</h3>
      <div className='calculator-calculator'>
        <Calc />
      </div>
    </main>
  );
}
