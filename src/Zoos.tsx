import zoobirds from "./api/zoodata";
import { useState } from "react";
import Placeholder from "./Placeholder";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { ExpandArrow1Bulk } from '@lineiconshq/free-icons';

const Gallery = () => {

    const [activeBird, SetActiveBird] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const clickHandler = (index: number) => {
        SetActiveBird(index);
    }

    const zooNames = zoobirds.map((bird, index) => (
        <li className={"bg-[#e6dbca] cursor-pointer rounded-xl ml-4 mr-4 mb-2 mt-2 p-2 border-1 border-gray-400 hover:border-[#c87288]!" + (index === activeBird ? " bg-[#c87288]!" : "")}
            onClick={() => { clickHandler(index); if (index !== activeBird) setImageLoaded(false); }}
            key={bird.name}>
            {bird.name}
        </li>
    ))

    const birdArea = () => {
        return (
            <div id="bird-area" className={imageLoaded ? "text-white col-span-4 lg:col-span-3" : "hidden"} >
                <div id="bird-data" className="absolute bg-gray-900 pt-1 pb-1 pl-2 pr-2 m-2 z-20">
                    <h2>{zoobirds[activeBird]?.name}</h2>
                    <h2>{zoobirds[activeBird]?.zooLocation}</h2>
                </div>
                <div className="relative">
                    <img src={`./ZooBirds/${zoobirds[activeBird]?.name}.JPG`} alt={zoobirds[activeBird]?.name}
                        className={"w-full h-full z-1 object-cover"}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {imageLoaded &&
                        (<Lineicons icon={ExpandArrow1Bulk}
                            className="cursor-zoom-in absolute bottom-2 right-2 text-white duration-200 focus:outline-none opacity-75 cursor-pointer hover:opacity-100 z-10 size-10 rounded-full bg-gray-800 p-2"
                            onClick={() => setModalOpen(true)} />
                        )}
                </div>
            </div>
        )
    }

    const renderFullImage = () => {
        if (modalOpen === true) {
            return (
                createPortal(
                    <Modal imgLoc={`./ZooBirds/${zoobirds[activeBird]?.name}.JPG`} onClose={() => setModalOpen(false)} />
                    , document.body))
        }
    }

    return (
        <div className="grid grid-cols-4 text-black-500 gap-2 overflow-hidden">
            <div id="sidebar" className="scrollbar-thumb-[#c87288] scrollbar-track-[#e6dbca] scrollbar-thin lg:col-span-1 col-span-4 max-h-90 lg:max-h-241 overflow-y-scroll bg-[#b8a99c] rounded-lg text-center ">
                <h2 className="text-lg font-bold mb-2 pt-2">{zoobirds.length} Birds</h2>
                <ul className="">
                    {zooNames}
                </ul>
            </div>
            {imageLoaded === false ? <Placeholder size={"large"} url={zoobirds[activeBird]?.name} /> : null}
            {birdArea()}
            {renderFullImage()}
        </div>
    )
}

export default Gallery