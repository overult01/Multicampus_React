import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './Greeting'; // Greeting.js 마지막문장 expoert default Greeting;
import Expression from './Expression'; // .js는 생략가능
import StyleAdd from './Expression_CSS';
import Hello from './ArrowFunction';
import Hello2 from './ClassSytax';
import Book from './Props';
import Welcome from './Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name = "홍길동" age ="20" score ="90.9" major = "it공학"/>
    <Welcome name = "박문수"/>

    <Book title ="제목1" body = "내용소개1" />
    <Book title ="제목2" body = "내용소개2" />
    <Book title ="제목3" body = "내용소개3" />

    {/* <Hello2 />
    <Hello />
    <App />
    <Greeting />
    <Expression /> 
    <StyleAdd /> */}
  </React.StrictMode>,
  
  // index.html에서 보여줄 div의 id를 넣어야.
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
