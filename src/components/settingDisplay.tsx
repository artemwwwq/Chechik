import React, {ChangeEvent, useState} from 'react';
import {Buttons} from "./Buttons";

type PropsType = {
    onClickSet: ()=> void
    maxValue: number
    minValue: number
    setMaxValue: (maxNumber: number)=> void
    setMinValue: (minNumber: number)=> void
    count: number
}

const SettingDisplay = (props: PropsType) => {


    const onClickSetHandler = () => {
        props.onClickSet()
    }

    const onChangeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeInputMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(e.currentTarget.valueAsNumber)
    }



    return (
        <div className='settingDisplay'>
            <div className={props.minValue < 0 ? 'erorrInput' : 'maxMinTablo'}>
                <div className='maxMinTitle'>
                    <h3>max value: <input type='number' value={props.maxValue} onChange={onChangeInputMaxValue}/></h3>
                    <h3>start value: <input type='number' value={props.minValue} onChange={onChangeInputMinValue}/></h3>
                </div>
            </div>
            <div className='minMaxBut'>
               <Buttons disabled={ props.minValue < 0 || props.minValue > props.maxValue} name={'SET'} callBack={onClickSetHandler}></Buttons>
            </div>
        </div>
    );
};

export default SettingDisplay;