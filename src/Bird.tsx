interface BirdProps {
    name: string;
    summary: string;
    images: string[];
    date: string;
}

function Bird({ name, summary, images, date }: BirdProps) {
    return (
        <a>
            <div id="wrapper" className="h-300 overflow-hidden">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{summary}</p>
                <p>{date}</p>
                <img className="" src={images[0]} alt={name} />
            </div>
        </a>
    )
}

export default Bird