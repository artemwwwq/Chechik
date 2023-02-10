import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display";
import SettingDisplay from "./components/settingDisplay";




function App() {
  const [count, setCount] = useState<number>(0)



  const onClickAdd = () => {
    if (count < 5) {
      setCount(count + 1)
    }
  }

  const onClickReset = () => {
    setCount(0)
  }

  const onClickSet = () => {

  }

  return (
    <div className="App">
      <SettingDisplay onClickSet={onClickSet}/>
      <Display count={count}
               onClickAdd={onClickAdd}
               onClickReset={onClickReset}
      />
    </div>
  );
}

export default App;
