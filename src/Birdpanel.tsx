import { useState } from "react";
import Carousel from "./Carousel"

interface BirdProps {
    tabIndex: string;
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    name: string;
    summary: string;
    imageCount: number;
    location: string;
    date: string;
}

function BirdPanel({ onClick, onKeyDown, name, summary, imageCount, location, date }: BirdProps) {

    const [activeImage, SetActiveImage] = useState(1);

    return (
        <>

            <div onClick={onClick} onKeyDown={() => onKeyDown} className="z-2 h-full w-full fixed top-0 left-0 bg-gray-900/80 cursor-zoom-out backdrop-blur-sm p-4">
            </div>

            <div className="z-3 fixed top-1/2 left-1/2 mt-1/2 ml-1/2 -translate-y-1/2 -translate-x-1/2 grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-3 max-w-[1600px] bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="sm:col-span-1 md:col-span-2">
                    <Carousel name={name} imageCount={imageCount} activeImage={activeImage} setActiveImage={SetActiveImage} />
                </div>
                <div className=" order-last relative flex flex-col max-w-6xl mx-auto text-white pb-8 pt-8 px-6">
                    <button onClick={onClick} className="absolute right-0 top-0 margin-2 p-2 cursor-pointer text-2xl bold bg-blue-500/10">X</button>
                    <h1 className="text-2xl mb-8 font-bold">The {name}</h1>
                    <p className="text-lg mb-auto">{summary}</p>
                    <p className="text-lg">Favourite photo was taken in {location} on {date}</p>
                </div>
            </div>
        </>

    )
}

export default BirdPanel