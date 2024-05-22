import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;