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
        <li className={"cursor-pointer" + (index === activeBird ? " bg-blue-500" : "")} onClick={() => clickHandler(index)} key={bird.name}>
            {bird.name}
        </li>
    ))

    return (
        <div className="grid grid-cols-4 text-gray-500 gap-2">
            <div id="sidebar" className="text-white lg:col-span-1 col-span-4 max-h-90 lg:max-h-241 overflow-y-scroll bg-gray-800 rounded-lg text-center ">
                <ul className="line-height-8">
                    {zooNames}
                </ul>
            </div>
            <div id="bird-area" className="text-white col-span-4 lg:col-span-3">
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