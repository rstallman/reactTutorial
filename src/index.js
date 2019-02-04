import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import Game from './ConnectFour';

// action creator
// const addItem = item => {
//   return {
//     type: "ADD_ITEM",
//     item: item
//   }
// }

// // reducer
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [...state, action.item];
//     case 'DELETE_ITEM':
//       return [...state.slice(0,action.index), ...state.slice(action.index+1)];
//     default:
//       return state;
//   }
// }

// var store = createStore(reducer);
// const unsub = store.subscribe(() => {
//   console.log(store.getState());
//   console.log('cute!')
// })

// store.dispatch(addItem('apple'));
// store.dispatch(addItem('banana'));
// unsub();
// store.dispatch(addItem('c'));

// console.log(store.getState());



// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Multiplier />,
//   document.getElementById('root')
// );