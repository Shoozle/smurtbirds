import zoobirds from "./api/zoodata";
import { useState } from "react";

const Gallery = () => {

    const [activeBird, SetActiveBird] = useState(0);

    const clickHandler = (index: number) => {
        SetActiveBird(index);
    }

    // const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     event.key === "Escape" ? SetViewingBird(false) : null;
    // }

    // const allZooBirds = zoobirds.map((bird, index) => (
    //     <Bird onClick={() => clickHandler(index)} key={bird.name} name={bird.name} whatStatus={bird.conservationStatus} />
    // ))

    const zooNames = zoobirds.map((bird, index) => (
        <li className="cursor-pointer m-1" onClick={() => clickHandler(index)} key={bird.name}>
            {bird.name}
        </li>
    ))

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-gray-500 mx-auto">
            <div id="sidebar" className="text-white max-h-90 md:max-h-250 overflow-y-scroll w-100 bg-gray-800 rounded-lg">
                <ul className="p-4 line-height-8">
                    {zooNames}
                </ul>
            </div>
            <div id="bird-area" className="text-white col-span-3 relative">
                <div id="bird-data" className="absolute bg-gray-900 pt-1 pb-1 pl-2 pr-2 m-2">
                    <h2>{zoobirds[activeBird]?.name}</h2>
                </div>
                <div>
                    <img src={`./ZooBirds/${zoobirds[activeBird]?.name}.JPG`} alt={zoobirds[activeBird]?.name} className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
    )
}

export default Gallery