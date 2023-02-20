import React from 'react';
import {Buttons} from "./Buttons";

type countType = {
    count: number
    onClickAdd: () => void
    onClickReset: () => void
    maxValue: number
    minValue: number
}

const Display = (props: countType) => {


    const addResetButton = (name: string) => {
        if (name === 'ADD') {
            props.onClickAdd()
        } if (name === 'RESET') {
            props.onClickReset()
        }
    }



    return (
        <div className='displayCount'>
            <div className='Tablo'>
                <div className={props.count === props.maxValue ? 'winnerCount' : 'count'}>{props.count}</div>
            </div>
            <div className='ButSolid'>
                <Buttons name={'ADD'} callBack={addResetButton} disabled={props.count >= props.maxValue || props.count < 0 || props.minValue > props.maxValue}></Buttons>
                <Buttons name={'RESET'} callBack={addResetButton} disabled={props.count === props.minValue || props.minValue < 0 || props.minValue > props.maxValue}></Buttons>
            </div>
        </div>
    );
};

export default Display;