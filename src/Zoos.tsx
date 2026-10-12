import zoobirds from "./api/zoodata";
import { useState } from "react";
import Placeholder from "./Placeholder";

const Gallery = () => {

    const [activeBird, SetActiveBird] = useState(0);
    const [loadedImage, setLoadedImage] = useState(false);

    const clickHandler = (index: number) => {
        SetActiveBird(index);
    }

    const zooNames = zoobirds.map((bird, index) => (
        <li className={"bg-[#e6dbca] cursor-pointer rounded-xl ml-4 mr-4 mb-2 mt-2 p-2 border-1 border-gray-400 hover:border-[#c87288]!" + (index === activeBird ? " bg-[#c87288]!" : "")}
            onClick={() => { clickHandler(index); if (index !== activeBird) setLoadedImage(false); }}
            key={bird.name}>
            {bird.name}
        </li>
    ))

    const birdArea = () => {
        return (
            <div id="bird-area" className={loadedImage ? "text-white col-span-4 lg:col-span-3" : "invisible"} >
                <div id="bird-data" className="absolute bg-gray-900 pt-1 pb-1 pl-2 pr-2 m-2">
                    <h2>{zoobirds[activeBird]?.name}</h2>
                    <h2>{zoobirds[activeBird]?.zooLocation}</h2>
                </div>
                <div >
                    <img src={`./ZooBirds/${zoobirds[activeBird]?.name}.JPG`} alt={zoobirds[activeBird]?.name}
                        className={"w-full h-full z-1 object-cover"}
                        onLoad={() => setLoadedImage(true)}
                        loading="lazy" />
                </div>
            </div>
        )
    }


    return (
        <div className="grid grid-cols-4 text-black-500 gap-2 overflow-hidden">
            <div id="sidebar" className="scrollbar-thumb-[#c87288] scrollbar-track-[#e6dbca] scrollbar-thin lg:col-span-1 col-span-4 max-h-90 lg:max-h-241 overflow-y-scroll bg-[#b8a99c] rounded-lg text-center ">
                <ul className="">
                    {zooNames}
                </ul>
            </div>
            {loadedImage === false ? <Placeholder size={"large"} url={zoobirds[activeBird]?.name || ""} /> : null}
            {birdArea()}
        </div>
    )
}

export default Gallery