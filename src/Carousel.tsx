import { useState } from "react";

type CarouselProps = {
    name: string;
    images: string[];
    activeImage: number;
    setActiveImage: (index: number) => void;
};

const Carousel = ({ name, images, activeImage, setActiveImage }: CarouselProps) => {

    // const [loaded, setLoaded] = useState(false);

    return (
        <div>
            <div className="h-full w-full">
                <div className="relative rounded-base">
                    {activeImage > 0 && (
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100 h-full
                            bg-gradient-to-r from-gray-900/50 to-transparent ease-in-out duration-200"
                            onClick={() => setActiveImage(Math.max(0, activeImage - 1))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>)}
                    <img src={`Birds/${name}${images[activeImage]}.JPG`} loading="lazy" alt={name} className="w-full h-full z-5 h-full w-full" />
                    {activeImage < images.length - 1 && (
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white focus:outline-none opacity-75 cursor-pointer hover:opacity-100 h-full
                            bg-gradient-to-l from-gray-900/50 to-transparent ease-in-out duration-200"
                            onClick={() => setActiveImage(Math.min(images.length - 1, activeImage + 1))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>)}
                </div>
            </div>
        </div >
    )
}

export default Carousel