import { useState } from "react";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { ExpandArrow1Bulk } from '@lineiconshq/free-icons';
import Modal from "./Modal";
import { createPortal } from "react-dom";

type CarouselProps = {
    name: string;
    imageCount: number;
    activeImage: number;
    setActiveImage: (index: number) => void;
};

const Carousel = ({ name, imageCount, activeImage, setActiveImage }: CarouselProps) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const renderImg = () => {
        return (
            <>
                <img
                    src={`./Birds/${name}${activeImage}.JPG`}
                    loading="lazy"
                    alt={name}
                    className="w-full h-full z-5"
                    onLoad={() => setImageLoaded(true)}
                />
                {imageLoaded &&
                    (<Lineicons icon={ExpandArrow1Bulk}
                        className="cursor-zoom-in absolute bottom-2 right-2 text-white duration-200 focus:outline-none opacity-75 cursor-pointer hover:opacity-100 z-55 size-10 rounded-full bg-gray-800 p-2"
                        onClick={() => setModalOpen(true)} />
                    )}
            </>
        )
    }

    const renderFullImage = () => {
        if (modalOpen === true) {
            return (
                createPortal(
                    <Modal imgLoc={`./Birds/${name}${activeImage}.JPG`} onClose={() => setModalOpen(false)} />
                    , document.body))
        }
    }



    return (

        <div>
            <div className="h-full w-full">
                <div className="relative">
                    {activeImage > 1 && imageLoaded && (
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100
                            ease-in-out duration-200 rounded-full bg-gray-800 p-2 ml-2"
                            onClick={() => setActiveImage(activeImage - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>)}
                    {renderImg()}
                    {renderFullImage()}
                    {activeImage < imageCount && imageLoaded && (
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100
                            ease-in-out duration-200 rounded-full p-2 mr-2 bg-gray-800"
                            onClick={() => setActiveImage(activeImage + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>)}
                </div>
            </div>
        </div >
    )
}

export default Carousel