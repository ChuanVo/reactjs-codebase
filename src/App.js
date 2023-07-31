import logo from './logo.svg';
import './App.css';
import MoneyConverter from './components/money-converter';
import WorldClock from './components/world-clock/world-clock';
import Game from './components/caro';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <WorldClock cityName={'Ha Noi'} offset={7}/>
        <WorldClock cityName={'Hong kong' offset={8}/>
        <WorldClock cityName={'Bombay'} offset={5.5}/> */}
        {/* <WorldClock cityName={'Hong kong'} offset={8}/>
        <WorldClock cityName={'Bombay'} offset={5.5}/>
        <WorldClock cityName={'New York'} offset={-4}/> */}

        {/* <MoneyConverter /> */}

        {/* <WorldClock cityName={'Ha Noi'} offset={7} /> */}

        <Game />
      </header>
    </div>
  );
}

export default App;
