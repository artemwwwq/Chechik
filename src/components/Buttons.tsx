type buttonPropsType = {
    name: string
    callBack: (name: string)=>void
}




export function Buttons(props: buttonPropsType) {

        const onClickHandler = () => {
            props.callBack(props.name)
        }

    return (
        <div className='But'>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}