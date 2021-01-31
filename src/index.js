import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//we have used initial state in reducer so importing
//also we are importing reducer from reducer
import reducer,{initialState} from "./reducer";
//also we need to import the state provider
import {StateProvider} from "./StateProvider";
ReactDOM.render(
  <React.StrictMode>
    {/* We are wraping here the State Provider so that evry componnet get access to the data  layer */}
    {/* if we push information in then we can push information  out wherever we want */}
{/*     
    Initial State is how the data layer look like in the begining
  reducer is how we play with the data or how we manipulate the data*/}
  {/* Reducer is just like data layer */}
    <StateProvider initialState={initialState} reducer={reducer} >
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
