import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './Greeting'; //Greeting.js 파일 마지막 문장 export default Greeting;
import reportWebVitals from './reportWebVitals';
import Expression from './Expression';
import StyleAdd from './Expression_CSS';
import Hello from './ArrowFunction';
import Hello2 from './ClassSyntax';
import HeaderPart from './Props';
import Book from './Props';
import Welcome from './Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name="홍길동" age="20" score="90.9" major="it공학" />
    <Welcome name="박문수"/>
   {/*<Book title="제목1" body="내용소개1" />
    <Book title="제목2" body="내용소개2" />
    <Book title="제목3" body="내용소개3" />
    
    <Hello2 />
    <Hello />
    <StyleAdd />
    <Greeting />
    <Expression />
    <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const numbers = [1, 3, 5]; 
const listItems = numbers.map(function(number){ 
  console.log(number); return number + 1; 
}); 
  console.log(listItems);

