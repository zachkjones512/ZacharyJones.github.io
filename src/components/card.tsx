interface CardProps {
    Name: string;
    Title?: string;
    Body: string;
    imageUrl?: string;
}

export default function Card(props:CardProps){



    return(
        <>
        <div className='card'>
            <div className='card-header'>
                {props.imageUrl ? <img alt={props.Name} className='card-image' src={props.imageUrl}/> : <>{props.Name}</>}
            </div>
            <div className='card-subheader'>{props.Title}</div>
            <div className='card-body'>{props.Body}</div>
        </div>
        </>
    )
}