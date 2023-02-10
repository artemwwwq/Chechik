import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons";

type PropsType = {
    onClickSet: ()=> void
}

const SettingDisplay = (props: PropsType) => {

    let [maxValue, setMaxValue] = useState('')
    let [minValue, setMinValue] = useState('')

    const onClickSetHandler = () => {
        props.onClickSet()
    }

    const onChangeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const onChangeInputMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }

    return (
        <div className='settingDisplay'>
            <div className='maxMinTablo'>
                <div className='maxMinTitle'>
                    <h3>max value: <input value={maxValue} onChange={onChangeInputMaxValue}/></h3>
                    <h3>start value: <input value={minValue} onChange={onChangeInputMinValue}/></h3>
                </div>
            </div>
            <div className='minMaxBut'>
                <Buttons name={'SET'} callBack={onClickSetHandler}></Buttons>
            </div>
        </div>
    );
};

export default SettingDisplay;