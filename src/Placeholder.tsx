
interface PlaceholderProps {
    size: string;
    url: string;
}

function Placeholder({ size, url }: PlaceholderProps) {

    switch (size) {
        case "small":
            return (
                <div className="">
                    <img src="./Birds/thumbs/Placeholder.JPG" alt="Placeholder" className="brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300 w-full h-full z-1 object-cover animate-pulse" />
                </div>
            );
        case "medium":
            return (
                <div className="">
                    <img src="./Birds/Placeholder.JPG" alt="Placeholder" className="w-full h-full z-1 object-cover z-5 animate-pulse" />
                </div>
            );
        case "large":
            return (
                <div className="w-full h-full col-span-3 blur-lg">
                    <img src={`./ZooThumbs/thumb-${url}.jpg`} alt="Placeholder" className="w-full h-full z-0 object-cover animate-pulse" />
                </div>
            );
        default:
            return null;
    }
}

export default Placeholder