import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Display";
import {Buttons} from "./Buttons";

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


    return (
        <div className="App">
            <Display count={count}/>
            <Buttons onClickAdd={onClickAdd}
                     onClickReset={onClickReset}
            />
        </div>
    )

}

export default App;
