interface BirdProps {
    onClick?: () => void;
    name: string;
    images: string[];
}

function Bird({ onClick, name, images }: BirdProps) {

    const localurl = `./Birds/thumbs/${name}${images[0]}.JPG`;

    return (

        <div onClick={onClick} className="relative rounded-lg shadow-lg border-2 overflow-hidden cursor-zoom-in hover:shadow-2xl">
            <h2 className="absolute pointer-events-none text-2xl z-1 text-white/90 w-full text-center font-bold text-3xl pt-1 text-shadow-lg/30">{name}</h2>
            <img className="brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300 w-full h-full" src={localurl} alt={name} />
        </div>

    )
}

export default Bird