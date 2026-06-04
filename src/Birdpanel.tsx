import { useState } from "react";
import Carousel from "./Carousel"

interface BirdProps {
    onClick?: () => void;
    name: string;
    summary: string;
    images: string[];
    date: string;
}

function BirdPanel({ onClick, name, summary, images, date }: BirdProps) {

    const [activeImage, SetActiveImage] = useState(0);

    return (
        <>
            <div onClick={onClick} className="absolute top-0 left-0 w-full h-full bg-gray-900/90 flex flex-col items-center justify-center gap-4 p-4 text-white">

            </div>
            <div className="absolute grid grid-cols-1 gap-4 text-white rounded-lg p-4 max-w-8xl bg-gray-800/90 mx-auto top-1/2 transform -translate-y-1/2">
                <div className="col-span-2">
                    <Carousel name={name} images={images} activeImage={activeImage} setActiveImage={SetActiveImage} />
                </div>
                <div className="order-first text-center">
                    <h1>{name}</h1>
                    <h1>{summary}</h1>
                    <h1>{date}</h1>
                </div>
            </div>
        </>

    )
}

export default BirdPanel