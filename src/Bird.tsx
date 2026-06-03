interface BirdProps {
    onClick?: () => void;
    name: string;
    summary: string;
    images: string[];
    date: string;
}

function Bird({ onClick, name, summary, images, date }: BirdProps) {

    const thumburl = `/Birds/thumbs/${name}${images[0]}.JPG`;

    return (

        <div onClick={onClick} id="wrapper" className="rounded-lg shadow-lg border-2 overflow-hidden">
            {/* <h2 className="text-2xl font-bold">{name}</h2>
                <p>{summary}</p>
                <p>{date}</p> */}
            <img className="brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300" src={thumburl} alt={name} />
        </div>

    )
}

export default Bird