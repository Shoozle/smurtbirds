import { useState } from "react";
import Carousel from "./Carousel"
import { Lineicons } from '@lineiconshq/react-lineicons';
import { ArrowLeftCircleSolid } from '@lineiconshq/free-icons';
import { ArrowRightCircleSolid } from "@lineiconshq/free-icons";

interface BirdpanelProps {
    tabIndex: string;
    onClick?: () => void;
    onPrevBird?: () => void;
    onNextBird?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    name: string;
    summary: string;
    imageCount: number;
    location: string;
    date: string;
    index: number;
    nextBirdName: string;
    prevBirdName: string;
    datalength: number;
}

function BirdPanel({ onClick, onPrevBird, onNextBird, onKeyDown, name, summary, imageCount, location, date, index, nextBirdName, prevBirdName, datalength }: BirdpanelProps) {

    const [activeImage, SetActiveImage] = useState(1);

    return (
        <>
            <div onClick={onClick} onKeyDown={() => onKeyDown} className="z-2 h-full w-full fixed top-0 left-0 bg-gray-900/80 cursor-zoom-out backdrop-blur-sm p-4">
            </div>
            <div className="z-3 fixed top-1/2 left-1/2 mt-1/2 ml-1/2 -translate-y-1/2 -translate-x-1/2 grid sm:grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-3 max-w-[1600px] bg-gray-900/90 backdrop-blur-sm rounded-lg">
                <div className="grid absolute w-full -top-12 grid-cols-2 justify-around ">
                    <button className={"" + (index === 0 ? 'invisible hidden' : 'flex items-start mr-auto bg-gray-900/80 pt-2 pl-4 pr-4 pb-2 rounded-xl hover:bg-gray-900/100 cursor-pointer')}
                        onClick={() => { onPrevBird && onPrevBird(); SetActiveImage(1); }}>
                        <Lineicons icon={ArrowLeftCircleSolid} className="mr-2" /> {prevBirdName}
                    </button>
                    <button className={"" + (index === datalength - 1 ? 'invisible hidden' : 'flex items-end ml-auto bg-gray-900/80 pt-2 pl-4 pr-4 pb-2 rounded-xl hover:bg-gray-900/100 cursor-pointer')}
                        onClick={() => { onNextBird && onNextBird(); SetActiveImage(1); }}>
                        {nextBirdName} <Lineicons icon={ArrowRightCircleSolid} className="ml-2" />
                    </button>
                </div>
                <div className="sm:col-span-1 md:col-span-2">
                    <Carousel name={name} imageCount={imageCount} activeImage={activeImage} setActiveImage={SetActiveImage} />
                </div>
                <div className=" order-last relative flex flex-col max-w-6xl mx-auto text-white pb-8 pt-8 px-6">
                    <h1 className="text-2xl mb-8 font-bold">The {name}</h1>
                    <p className="text-lg mb-auto">{summary}</p>
                    <p className="text-lg">Favourite photo was taken in {location} on {date}</p>
                </div>
            </div>
        </>
    )
}

export default BirdPanel