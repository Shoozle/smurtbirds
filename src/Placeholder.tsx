
interface PlaceholderProps {
    size: string;
    url: string;
}

function Placeholder({ size, url }: PlaceholderProps) {

    switch (size) {
        case "small":
            return (
                <div className="">
                    <img src="./Birds/thumbs/Placeholder.JPG" alt="Placeholder" className="animate-pulse w-full h-full z-4 object-cover" />
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
                <div id="bird-area" className={"text-white col-span-4 lg:col-span-3 blur-lg"} >
                    <div id="bird-data" className="absolute bg-gray-900 pt-1 pb-1 pl-2 pr-2 m-2">
                    </div>
                    <div >
                        <img src={`./ZooThumbs/thumb-${url}.jpg`} alt="Placeholder" className="w-full h-full z-0 object-cover animate-pulse" />
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default Placeholder