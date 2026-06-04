type CarouselProps = {
    name: string;
    images: string[];
    activeImage: number;
    setActiveImage: (index: number) => void;
};

const Carousel = ({ name, images, activeImage, setActiveImage }: CarouselProps) => {
    return (
        <div className="h-full">
            <div className="relative rounded-base">
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-600 focus:outline-none"
                    onClick={() => setActiveImage(Math.max(0, activeImage - 1))}>
                    Left Image
                </button>
                <img src={`Birds/${name}${images[activeImage]}.JPG`} alt={name} className="aspect-3/2 object-cover" />
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-600 focus:outline-none"
                    onClick={() => setActiveImage(Math.min(images.length - 1, activeImage + 1))}>
                    Right Image
                </button>
            </div>
        </div>
    )
}

export default Carousel