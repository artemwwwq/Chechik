type countType = {
    count: number
}

export function Display(props: countType) {

    return (
        <div className='displayStyle'>
            <div> СЧЕТЧИК ДО 5 </div>
            <div className={props.count === 5 ? 'winnerCount' : 'count'}>{props.count}</div>
        </div>
    )
}