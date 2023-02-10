import React from 'react';
import {Buttons} from "./Buttons";

type countType = {
    count: number
    onClickAdd: () => void
    onClickReset: () => void
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
                <div className={props.count === 5 ? 'winnerCount' : 'count'}>{props.count}</div>
            </div>
            <div className='ButSolid'>
                <Buttons name={'ADD'} callBack={addResetButton}></Buttons>
                <Buttons name={'RESET'} callBack={addResetButton}></Buttons>
            </div>
        </div>
    );
};

export default Display;