import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Select } from 'antd';
import MoneyConverter from './components/money-converter';
import WorldClock from './components/world-clock/world-clock';
import Game from './components/caro';
import ColumnGroup from 'antd/es/table/ColumnGroup';

const componentOtp = [
  {
    value: '1',
    label: 'WorldClock'
  },
  {
    value: '2',
    label: 'Game Caro'
  },
  {
    value: '3',
    label: 'MoneyConverter'
  }
]

function App() {
  const [selectComponent, setSelectComponent] = useState(1)

  console.log('selectComponent: ', selectComponent)

  const handleOnChange = (data) => {
    setSelectComponent(data)
    console.log(data)
  }

  function renderComponent() {
    switch(selectComponent) {
      case 1: 
        return (<WorldClock cityName={'Ha Noi'} offset={7} />)
      case 2: 
        return (<Game />)
      case 3: 
        return (< MoneyConverter/>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <Select
            className='selector'
            size={'middle'}
            style={{
              width: 200,
            }}
            defaultValue={componentOtp.value}
            options={componentOtp}
            onChange={handleOnChange}
          />
          
          {renderComponent()}
          
            {/* {selectComponent == '1' && (<WorldClock cityName={'Ha Noi'} offset={7} />)}
            {selectComponent == '2' && (<Game />)}
            {selectComponent == '3' && (<MoneyConverter />)} */}



        {/* <WorldClock cityName={'Ha Noi'} offset={7}/>
        <WorldClock cityName={'Hong kong' offset={8}/>
        <WorldClock cityName={'Bombay'} offset={5.5}/> */}
        {/* <WorldClock cityName={'Hong kong'} offset={8}/>
        <WorldClock cityName={'Bombay'} offset={5.5}/>
        <WorldClock cityName={'New York'} offset={-4}/> */}

        {/* <MoneyConverter /> */}

        {/* <WorldClock cityName={'Ha Noi'} offset={7} /> */}

        {/* <WorldClock cityName={'Ha Noi'} offset={7}/>
        <Game />
        <MoneyConverter /> */}
      </header>
    </div>
  );
}

export default App;
