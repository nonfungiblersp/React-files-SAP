//import logo from './logo.svg';
import './App.css'; //to link App.css with this file  
import Hello from './Hello'; 
import Hello2 from './hello2';

function App() {
  return (
    <div className="App">
      {/* <h1 className="App-header">Hello World</h1> */}

      {/* <header className="App-header">
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
      </header> */}
      <Hello/>
      <Hello2/>
    </div>
  );
}

export default App;
