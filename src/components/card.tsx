interface CardProps {
    Name: string;
    Title?: string;
    Body: string;
    imageUrl?: string;
}

export default function Card(props:CardProps){



    return(
        <>
        <div className='w-full mt-4 rounded-2xl shadow-lg bg-zinc-800 flex flex-col items-start p-8'>
            <div className='font-medium text-[225%] text-white'>
                {props.imageUrl ? <img alt={props.Name} className='w-full' src={props.imageUrl}/> : <>{props.Name}</>}
            </div>
            <div className='font-normal text-[150%]'>{props.Title}</div>
            <div className='py-4 text-left'>{props.Body}</div>
        </div>
        </>
    )
}