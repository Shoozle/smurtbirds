import { Suspense } from 'react';

interface BirdProps {
    onClick?: () => void;
    name: string;
    whatStatus: string;
};

function Bird({ onClick, name, whatStatus }: BirdProps) {

    const localurl = `./Birds/thumbs/${name}1.JPG`;

    const renderImg = () => {
        return (
            <img
                className="brightness-90 hover:brightness-110 hover:scale-110 transition ease-in duration-300 w-full h-full "
                src={localurl}
                alt={name}
                loading="lazy"
            />
        )
    }

    const loadingImg = () => {
        return (
            <img src='./Birds/thumbs/Placeholder.JPG' />
        )
    }

    return (
        <div onClick={onClick} className={"relative rounded-lg shadow-lg border-2 overflow-hidden cursor-zoom-in hover:shadow-2xl min-h-50 bg-[url(./Birds/thumbs/Placeholder.JPG)] " +
            (whatStatus === `updated` ? "order-3" : whatStatus === `new` ? "order-2" : "order-4")}>
            <h2
                className="absolute pointer-events-none z-1 text-white/90 w-full text-center font-bold text-3xl pt-1 text-shadow-lg/30">
                {name}
                {whatStatus === `updated` ? " (Updated)" : null}
                {whatStatus === `new` ? " (New)" : null}
            </h2>
            <Suspense fallback={loadingImg()}>
                {renderImg()}
            </Suspense>
            {whatStatus === `new` ? <span className="absolute top-0 left-0 inline-flex h-10 w-10 animate-ping rounded-full bg-yellow-400 opacity-75"></span> : null}
        </div>

    )
}

export default Bird