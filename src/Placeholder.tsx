
interface PlaceholderProps {
    size: string;
}

function Placeholder({ size }: PlaceholderProps) {

    if (size === "small") {
        return (
            <div className="">
                <img src="./Birds/thumbs/Placeholder.JPG" alt="Placeholder" className="brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300 w-full h-full z-1 object-cover animate-pulse" />
            </div>)
    }
    else if (size === "medium") {
        return (
            <div className="">
                <img src="./Birds/Placeholder.JPG" alt="Placeholder" className="w-full h-full z-1 object-cover z-5 animate-pulse" />
            </div>)
    }
    else {
        return (
            <div className="">
                <img src="./ZooBirds/Placeholder.jpg" alt="Placeholder" className="w-full h-full z-0 object-cover animate-pulse" />
            </div>)
    }
}

export default Placeholder