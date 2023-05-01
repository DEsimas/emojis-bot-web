import React, { useReducer } from 'react';

import './Calculator.scss';
import CalculatorButton from './CalculatorButton.jsx';

const ACTIONS = {
  ADD_DIGIT: 'add-digit', //нажата кнопка 0-9 или .
  CHOOSE_OPERATION: 'choose-operation', //нажате кнопка + - * /
  ClEAR: 'clear', // нажате кнопка AC
  DELETE_DIGIT: 'delete-digit', // нажата кнопка DEL
  EVALUATE: 'evaluate' // нажата кнопка =
}

/*state: {
  current: string // текущее число в калькуляторе
  previous: string // число, которое былло введено до нажатия кнопки операции
  operation: string // операция
  overwrite: boolean // флаг, true - только что было нажато равно и число из current при нажатии след. кнопки
                     // нужно полностью стереть (не дописывать новые цифры), false - штатная работа
}*/

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      //если число было вычислено, стереть его и начать писать новое
      if (state.overwrite) return {
        ...state,
        current: action.payload,
        overwrite: false
      }
      //если чилсо ноль, не дать писать больше нулей
      if (action.payload === '0' && state.current === '0') return state;
      //если в числе есть точка, не дать поставить ещё
      if (action.payload === '.' && state.current.includes('.')) return state;
      //базовый случай: дописать в конец текущего числа цифру
      return {
        ...state,
        current: `${state.current || ''}${action.payload}`
      }
    case ACTIONS.ClEAR:
      //очистить стейт
      return {}
    case ACTIONS.CHOOSE_OPERATION:
      //если пользователь не ввёл никакое число, не устанавливать операцию
      if (state.current == null && state.previous == null) return state;
      //если текущее число не сущ. меняем операцию
      if (state.current == null) return {
        ...state,
        operation: action.payload
      }
      //если прошлого числа не сущ. устанавливаем на его место текущее и ставим операцию
      if (state.previous == null) return {
        ...state,
        operation: action.payload,
        previous: state.current,
        current: null
      }
      //если текущее число, предыдущее число и операция установлена, произвести вычисление и поставить новую операцию
      return {
        ...state,
        previous: evaluate(state),
        current: null,
        operation: action.payload
      }
    case ACTIONS.EVALUATE:
      //если какого-то компонента вычислений не хватает не вычислять
      if (state.current == null || state.previous == null || state.operation == null) return state;
      return {
        ...state,
        previous: null,
        operation: null,
        current: evaluate(state),
        overwrite: true
      }
    case ACTIONS.DELETE_DIGIT:
      //если только что было произведено вычисление, стереть число и установить флаг в false
      if (state.overwrite) return {
        ...state,
        overwrite: false,
        current: null
      }
      //если нет числа, то не надо и стирать цифру
      if (state.current == null) return state;
      //если в числе только одна цифра поставить его в null
      if (state.current?.length === 1) return {
        ...state,
        current: null
      }
      //убрать последнюю цифру из числа
      return {
        state,
        current: state.current.slice(0, -1)
      }
  }
}

//получить результат вычислений, основываясь на стейте
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

  /*Калькулятор состоит из кучи кнопок, каждая - компонент CalculatorButton.
  Он в зависимости от пропсов производит нужный action с значением кнопки*/
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
