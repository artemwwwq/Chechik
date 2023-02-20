type buttonPropsType = {
    name: string
    callBack: (name: string)=>void
    disabled: boolean
}




export function Buttons(props: buttonPropsType) {

        const onClickHandler = () => {
            props.callBack(props.name)
        }




    return (
        <div className='But'>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}