// import logo from './logo.svg';
import './App.css';
// react 내부 화면 랜더링시 jsx문법(html문법과 유사) 사용 표현 
function App() {
  return (
    <div className="App">
      {/* { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> } */}
      <h1>리액트 리뷰합니다.</h1>
    </div>
  );
}

export default App;
