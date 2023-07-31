import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassClock from './components/class-clock';
import FuncClass from './components/func-clock';

function App(label = 'default value') {
  const [showProfile, setShowProfile] = useState(true)

  const handleSwitchComponent = () => {
    setShowProfile(!showProfile)
  }

  console.log('=>> ', label)

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={handleSwitchComponent}>Switch component</button>
        {showProfile ? (
          <div className='profile'>
          <img className='profile-image' src="/profile.jpg" alt="image" />
            <div className='profile-content'>
              <div className='profile-item'>
                <div className='titel'>Họ tên:</div>
                <div className='info'>Võ Thịnh Chuẩn</div>
              </div>
              <div className='profile-item'>
                <div className='titel'>Giới tính:</div>
                <div className='info'>Nam</div>
              </div>
              <div className='profile-item'>
                <div className='titel'>Địa chỉ:</div>
                <div className='info'>Tân Phú - Hồ Chí Minh</div>
              </div>
              <div className='profile-item'>
                <div className='titel'>Số điện thoại:</div>
                <div className='info'>0989xxxxxx</div>
              </div>
            </div>
          </div>
        ) : (
          <ClassClock />
          // <FuncClass />
        )}
      </header>
    </div>
  );
}

export default App;
