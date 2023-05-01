import React from 'react';

export default function CalculatorButton({ dispatch, payload, action },) {
  return (
    <button className={`calculator-grid-button ${payload === '=' || payload === 'AC' ? 'two' : ''}`} onClick={() => dispatch({ type: action, payload })} >{payload}</button>
  );
}
