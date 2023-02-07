import React from 'react';
import {Buttons} from "./Buttons";

type PropsType = {
    onClickSet: ()=> void
}

const SettingDisplay = (props: PropsType) => {
    return (
        <div className='settingDisplay'>
            <div className='maxMinTablo'>
                <div className='maxMinTitle'>
                    <h3>max value: <input value={0}/></h3>
                    <h3>start value: <input value={0}/></h3>
                </div>
            </div>
            <div className='minMaxBut'>
                <button onClick={props.onClickSet}>SET</button>
            </div>
        </div>
    );
};

export default SettingDisplay;