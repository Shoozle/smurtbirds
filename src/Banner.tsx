function Banner() {

    return (

        <div className="order-1 row-span-2 min-h-100 relative rounded-lg shadow-lg border-2 overflow-hidden hover:shadow-2xl">
            <img src="./public/Banner.JPG" className="absolute object-cover w-full"></img>
            <div className="absolute top-0 left-0 text-white/90 w-full text-right text-2xl pt-1 text-shadow-lg/30">
                <h2>Sean Murtagh</h2>
                <h3>Amateur bird photographer</h3>
                <h3>Canon EOS R7</h3>
                <h3>Canon RF 100-500mm F4.5-7.1L Lens</h3>
            </div>
        </div >
    )
}

export default Banner