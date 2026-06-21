import Banner from "./Banner";
import Bird from "./Bird";
import BirdPanel from "./Birdpanel";
import birddata from "./api/birddata";
import { useState } from "react";

type BirdData = {
    name: string;
    summary: string;
    images: string[];
    date: string;
    location: string;
};

const Gallery = () => {

    const [activeBird, SetActiveBird] = useState<BirdData | null>(null);
    const [viewingBird, SetViewingBird] = useState(false);

    const clickHandler = (bird: BirdData) => {
        SetActiveBird(bird);
        SetViewingBird(true);
    }

    const allBirds = birddata.map((bird) => (
        <Bird onClick={() => clickHandler(bird)} key={bird.name} name={bird.name} images={bird.images} />
    ))

    const handleKeyPress = (e: KeyboardEvent) => {
        console.log(e)
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-gray-500 mx-auto">
            <Banner />
            {allBirds}
            {viewingBird &&
                activeBird &&
                <BirdPanel
                    tabIndex="1"
                    onClick={() => SetViewingBird(false)}
                    onKeyDown={handleKeyPress}
                    name={activeBird.name}
                    summary={activeBird.summary}
                    images={activeBird.images}
                    date={activeBird.date}
                    location={activeBird.location}
                />}
        </div>
    )
}

export default Gallery