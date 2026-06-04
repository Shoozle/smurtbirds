import { useState } from "react";

type CarouselProps = {
    name: string;
    images: string[];
    activeImage: number;
    setActiveImage: (index: number) => void;
};

const Carousel = ({ name, images, activeImage, setActiveImage }: CarouselProps) => {

    const [loaded, setLoaded] = useState(false);

    const loadingSpinner = (
        <div className="absolute grid grid-cols-1 gap-4 text-white rounded-lg p-4 max-w-8xl bg-gray-800/90 mx-auto top-1/2 left-1/2 transform -translate-y-1/2 translate-x-1/2">
            <div className="col-span-1">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div >
    );

    return (
        <div>
            <div className="h-full">
                <div className="relative rounded-base">
                    {activeImage > 0 && (
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100 h-full
                            bg-gradient-to-r from-gray-900/60 to-transparent"
                            onClick={() => setActiveImage(Math.max(0, activeImage - 1))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>)}
                    {!loaded && loadingSpinner}
                    <img src={`Birds/${name}${images[activeImage]}.JPG`} alt={name} onLoad={() => setLoaded(true)} className="shadow-xl" />
                    {activeImage < images.length - 1 && (
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100 h-full
                            bg-gradient-to-l from-gray-900/60 to-transparent"
                            onClick={() => setActiveImage(Math.min(images.length - 1, activeImage + 1))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>)}
                </div>
            </div>
        </div >
    )
}

export default Carousel