import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display";
import SettingDisplay from "./components/settingDisplay";




function App() {
  const [count, setCount] = useState<number>(0)

  const [maxValue, setMaxValue] = useState<number>(0)
  const [minValue, setMinValue] = useState<number>(0)




  const onClickAdd = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  }

  const onClickReset = () => {
    setCount(minValue)
  }

  const onClickSet = () => {
      if (maxValue) {
          setCount(minValue)
      } else {
          setMinValue(minValue)
  }
  }


  return (
    <div className="App">
      <SettingDisplay onClickSet={onClickSet}
                      maxValue={maxValue}
                      setMaxValue={setMaxValue}
                      minValue={minValue}
                      setMinValue={setMinValue}
                      count={count}
      />
      <Display count={count}
               onClickAdd={onClickAdd}
               onClickReset={onClickReset}
               maxValue={maxValue}
               minValue={minValue}
      />
    </div>
  );
}

export default App;
