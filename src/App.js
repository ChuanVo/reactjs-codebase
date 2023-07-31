import logo from './logo.svg';
import './App.css';
import WorldClock from './components/world-clock/world-clock'
import GameCaro from './components/game-caro';
import MoneyConverter from './components/money-converter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <WorldClock cityName={'Ha Noi'} offset={7}/>
        <WorldClock cityName={'Hong kong'} offset={8}/>
        <WorldClock cityName={'Bombay'} offset={5.5}/>
        <WorldClock cityName={'New York'} offset={-4}/> */}

        {/* <GameCaro /> */}
        <MoneyConverter />
      </header>
    </div>
  );
}

export default App;
