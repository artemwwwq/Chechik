import React from 'react';
import {Buttons} from "./Buttons";

type countType = {
    count: number
    onClickAdd: () => void
    onClickReset: () => void
}

const Display = (props: countType) => {
    return (
        <div className='displayCount'>
            <div className='Tablo'>
                <div className={props.count === 5 ? 'winnerCount' : 'count'}>{props.count}</div>
            </div>
            <div className='ButSolid'>
                <Buttons onClickAdd={props.onClickAdd} onClickReset={props.onClickReset}/>
            </div>
        </div>
    );
};

export default Display;