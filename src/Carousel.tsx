type CarouselProps = {
    name: string;
    images: string[];
    activeImage: number;
    setActiveImage: (index: number) => void;
};

const Carousel = ({ name, images, activeImage, setActiveImage }: CarouselProps) => {

    const imageItems = images.map((image) => {

        const localurl = `Birds/thumbs/${name}${images[0]}.JPG`;
        const githuburl = `https://shoozle.github.io/smurtbirds/Birds/${name}${image}.JPG`;

        return (
            <div key={image} data-carousel-item={image === "0" ? "active" : undefined}>
                <img src={localurl} alt={name} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
        )
    })

    return (
        <div id="controls-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-base md:h-96">
                <button onClick={() => setActiveImage(Math.max(0, activeImage - 1))}>Left Image</button>
                {/* {imageItems} */}
                <img src={`Birds/${name}${images[activeImage]}.JPG`} alt={name} />
                <button onClick={() => setActiveImage(Math.min(images.length - 1, activeImage + 1))}>Right Image</button>

            </div>
            <div id="controls-carousel" className="relative w-full">

            </div>
        </div>
    )
}

export default Carousel