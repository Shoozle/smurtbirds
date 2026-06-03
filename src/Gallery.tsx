import Bird from "./Bird";
import birddata from "./api/birddata";

const allBirds = birddata.map((bird) => (
    <Bird name={bird.name} summary={bird.summary} images={bird.images} date={bird.date} />
))

const Gallery = () => {

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-gray-500 mx-auto">
            {allBirds}
        </div>
    )
}

export default Gallery