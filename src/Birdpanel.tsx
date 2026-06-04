import { useState } from "react";
import Carousel from "./Carousel"

interface BirdProps {
    onClick?: () => void;
    name: string;
    summary: string;
    images: string[];
}

function BirdPanel({ onClick, name, summary, images }: BirdProps) {

    const [activeImage, SetActiveImage] = useState(0);

    return (
        <>
            <div id="lightbox" onClick={onClick} className="absolute top-0 left-0 w-screen h-screen bg-gray-900/80 cursor-zoom-out backdrop-blur-sm">

            </div>
            <div id="bird-panel" className="absolute grid sm:grid-cols-1 md:grid-cols-3 max-w-[1920px] bg-gray-900/90 backdrop-blur-sm rounded-lg">
                <div className="sm:col-span-1 md:col-span-2">
                    <Carousel name={name} images={images} activeImage={activeImage} setActiveImage={SetActiveImage} />
                </div>
                <div className="order-last text-center max-w-6xl mx-auto text-white pb-8 pt-8 px-6">
                    <h1 className="text-2xl mb-8 font-bold">{name}</h1>
                    <p className="text-lg">{summary}</p>
                </div>
            </div>
        </>

    )
}

export default BirdPanel