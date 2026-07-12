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
            (whatStatus === `updated` ? "order-3" : whatStatus === `new` ? "order-2 " : "order-4")}>
            <Suspense fallback={loadingImg()}>
                <h2
                    className={"absolute pointer-events-none z-1 text-white/90 w-full text-center font-bold text-3xl pb-2 text-shadow-lg/30 " + (whatStatus === `new` ? "bg-yellow-400" : whatStatus === `updated` ? "bg-blue-300" : "")}>
                    {name}
                    {whatStatus === `updated` ? " (Updated)" : null}
                    {whatStatus === `new` ? " (New)" : null}
                </h2>

                {renderImg()}
            </Suspense>
        </div>

    )
}

export default Bird