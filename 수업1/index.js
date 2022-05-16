import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import A from './ReviewTest';
//import B from './ReviewTest2';
//import Book from './ReviewTest3';
//import User from './ReviewTest4';
import BoardList from './BoardList';


const root = ReactDOM.createRoot(document.getElementById('root'));//index.html 존재
root.render(
  <React.StrictMode>
{/*    <App />
   <A />
   <B />
   <Book /> */}
    {/* <User name="홍길동" address="서울"  /> */}
    <BoardList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
