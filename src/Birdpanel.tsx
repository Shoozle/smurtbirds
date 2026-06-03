import Carousel from "./Carousel"

interface BirdProps {
    onClick?: () => void;
    name: string;
    summary: string;
    images: string[];
    date: string;
}

function BirdPanel({ onClick, name, summary, images, date }: BirdProps) {

    //const thumburl = `/Birds/thumbs/${name}${images[0]}.JPG`;
    //const githuburl = `https://shoozle.github.io/smurtbirds/Birds/${name}${images[0]}.JPG`;

    const imageGalley = images.map((image, i) => {

        //const thumburl = `/Birds/thumbs/${name}${images[0]}.JPG`;
        const githuburl = `https://shoozle.github.io/smurtbirds/Birds/${name}${image}.JPG`;

        return <img src={githuburl} alt={name} className="w-100" />
    })

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 flex flex-col items-center justify-center gap-4 p-4 text-white">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-gray-500 mx-auto rounded-lg p-4 w-full max-w-2xl bg-gray-800/90">
                <div>
                    <Carousel>
                    </Carousel>
                    {imageGalley}
                </div>
                <div>
                    <h1>{name}</h1>
                    <h1>{summary}</h1>
                    <h1>{date}</h1>
                </div>
                <button onClick={onClick} className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition ease-in duration-300">Close</button>
            </div>
        </div>
    )
}

export default BirdPanel