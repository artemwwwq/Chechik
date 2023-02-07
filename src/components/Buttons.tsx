type buttonPropsType = {
    onClickAdd: () => void
    onClickReset: () => void
}

export function Buttons(props: buttonPropsType) {


    return (
        <div className='But'>
            <button onClick={props.onClickAdd} >ADD</button>
            <button onClick={props.onClickReset}>RESET</button>
        </div>
    )
}