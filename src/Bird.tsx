import { useState } from 'react';
import Placeholder from './Placeholder';

interface BirdProps {
    onClick?: () => void;
    name: string;
    whatStatus: string;
};

function Bird({ onClick, name, whatStatus }: BirdProps) {

    const [loadedImage, setLoadedImage] = useState(false);

    const birdThumbnail = () => {
        return (
            <img
                className={loadedImage === false ? "brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300 w-full h-full z-1 object-cover" : ""}
                src={`./Birds/thumbs/${name}1.JPG`}
                alt={name}
                loading="lazy"
                onLoad={() => setLoadedImage(true)}
            />
        )
    }

    return (
        <div onClick={onClick} className={"relative rounded-lg shadow-lg border-2 overflow-hidden cursor-zoom-in hover:shadow-2xl min-h-50 " +
            (whatStatus === `updated` ? "order-3" : whatStatus === `new` ? "order-2 " : "order-4")}>
            <h2
                className={"absolute pointer-events-none z-1 text-white/90 w-full text-center font-bold text-3xl pb-2 text-shadow-lg/30 " + (whatStatus === `new` ? "bg-yellow-400" : whatStatus === `updated` ? "bg-blue-300" : "")}>
                {name}
                {whatStatus === `updated` ? " (Updated)" : null}
                {whatStatus === `new` ? " (New)" : null}
            </h2>
            <div className="relative w-full h-full">
                {loadedImage === false ? <Placeholder size={"small"} url="" /> : null}
                {birdThumbnail()}
            </div>
        </div>

    )
}

export default Bird