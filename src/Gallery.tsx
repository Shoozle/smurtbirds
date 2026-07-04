import Banner from "./Banner";
import Bird from "./Bird";
import BirdPanel from "./Birdpanel";
import birddata from "./api/birddata";
import { useState } from "react";

const Gallery = () => {

    const [activeBird, SetActiveBird] = useState(0);
    const [viewingBird, SetViewingBird] = useState(false);

    const clickHandler = (index: number) => {
        SetActiveBird(index);
        SetViewingBird(true);
    }

    const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === "Escape" ? SetViewingBird(false) : null;
    }

    const allBirds = birddata.map((bird, index) => (
        <Bird onClick={() => clickHandler(index)} key={bird.name} name={bird.name} whatStatus={bird.whatStatus} />
    ))

    return (
        <div
            onKeyDown={keyHandler}
            tabIndex={1}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-gray-500 mx-auto">
            <Banner totalBirds={birddata.length} />
            {allBirds}
            {viewingBird &&
                activeBird !== undefined &&
                <BirdPanel
                    tabIndex="1"
                    onClick={() => SetViewingBird(false)}
                    onPrevBird={() => SetActiveBird(activeBird - 1)}
                    onNextBird={() => SetActiveBird(activeBird + 1)}
                    name={birddata[activeBird].name}
                    summary={birddata[activeBird].summary}
                    imageCount={birddata[activeBird].imageCount}
                    date={birddata[activeBird].date}
                    location={birddata[activeBird].location}
                    index={activeBird}
                    nextBirdName={activeBird < birddata.length - 1 ? birddata[activeBird + 1].name : ''}
                    prevBirdName={activeBird > 0 ? birddata[activeBird - 1].name : ''}
                    datalength={birddata.length}
                />}
        </div>
    )
}

export default Gallery