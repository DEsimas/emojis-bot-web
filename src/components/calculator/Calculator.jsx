import React, { useReducer } from 'react';

import './Calculator.scss';
import CalculatorButton from './CalculatorButton.jsx';

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  ClEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) return {
        ...state,
        current: action.payload,
        overwrite: false
      }
      if (action.payload === '0' && state.current === '0') return state;
      if (action.payload === '.' && state.current.includes('.')) return state;
      return {
        ...state,
        current: `${state.current || ''}${action.payload}`
      }
    case ACTIONS.ClEAR:
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      if (state.current == null && state.previous == null) return state;
      if (state.current == null) return {
        ...state,
        operation: action.payload
      }
      if (state.previous == null) return {
        ...state,
        operation: action.payload,
        previous: state.current,
        current: null
      }
      return {
        ...state,
        previous: evaluate(state),
        current: null,
        operation: action.payload
      }
    case ACTIONS.EVALUATE:
      if (state.current == null || state.previous == null || state.operation == null) return state;
      return {
        ...state,
        previous: null,
        operation: null,
        current: evaluate(state),
        overwrite: true
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) return {
        ...state,
        overwrite: false,
        current: null
      }
      if (state.current == null) return state;
      if (state.current?.length === 1) return {
        ...state,
        current: null
      }
      return {
        state,
        current: state.current.slice(0, -1)
      }
  }
}

function evaluate({ current, previous, operation }) {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return '';
  switch (operation) {
    case '+':
      return prev + curr;
    case '-':
      return prev - curr;
    case '*':
      return prev * curr;
    case '÷':
      return prev / curr;
  }
}

export default function Calculator() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})

  return (
    <div className='calculator-grid'>
      <div className='calculator-grid-output'>
        <div className='calculator-grid-output-previous'>{previous} {operation}</div>
        <div className='calculator-grid-output-current'>{current}</div>
      </div>
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ClEAR} payload='AC' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.DELETE_DIGIT} payload='DEL' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} payload='÷' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='1' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='2' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='3' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} payload='*' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='4' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='5' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='6' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} payload='+' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='7' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='8' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='9' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} payload='-' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='.' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.ADD_DIGIT} payload='0' />
      <CalculatorButton dispatch={dispatch} action={ACTIONS.EVALUATE} payload='=' />
    </div>
  );
}
