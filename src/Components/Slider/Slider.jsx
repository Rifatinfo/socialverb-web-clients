import { useEffect, useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    // Manually go to the previous slide
    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
    };

    // Manually go to the next slide
    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
    };

    return (
        <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="slide1" className={`carousel-item relative w-full h-screen min-h-screen ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <img
                    src="https://miboozwp.pixydrops.com/wp-content/uploads/2021/11/main-slider-1-1.jpg"
                    className="w-full h-full object-cover" alt="Tourist Destination" />
                <div className="absolute inset-0 flex items-center justify-center text-center bg-gradient-to-r from-black/80 via-black/60 to-transparent p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8 mt-16">
                        <h1 className="font-bold text-6xl md:text-9xl lg:text-9xl text-white text-shadow-lg">
                            CREATIVE <br /> TALENT <br /> HERE
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <button onClick={goToPrevSlide} className="btn btn-circle btn-outline border-2 text-white">❮</button>
                    <button onClick={goToNextSlide} className="btn btn-circle btn-outline border-2 text-white">❯</button>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className={`carousel-item relative w-full h-screen min-h-screen ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                <img
                    src="https://miboozwp.pixydrops.com/wp-content/uploads/2021/11/main-slider-1-2.jpg"
                    className="w-full h-full object-cover" alt="Tourist Destination" />
                <div className="absolute  inset-0 flex items-center justify-center text-center bg-gradient-to-r from-black/80 via-black/60 to-transparent p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8 mt-16">
                        <h1 className="font-bold text-6xl md:text-9xl lg:text-9xl text-white text-shadow-lg">
                            CREATIVE <br /> TALENT <br /> HERE
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <button onClick={goToPrevSlide} className="btn btn-circle btn-outline border-2 text-white">❮</button>
                    <button onClick={goToNextSlide} className="btn btn-circle btn-outline border-2 text-white">❯</button>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className={`carousel-item relative w-full h-screen min-h-screen ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                <img
                    src="https://miboozwp.pixydrops.com/wp-content/uploads/2021/11/main-slider-1-3.jpg"
                    className="w-full h-full object-cover" alt="Tourist Destination" />
                <div className="absolute inset-0 flex items-center justify-center text-center bg-gradient-to-r from-black/80 via-black/60 to-transparent p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 sm:space-y-5 ml-4 sm:ml-6 md:ml-8 mt-16">
                        <h1 className="font-bold text-6xl md:text-9xl lg:text-9xl text-white text-shadow-lg">
                            CREATIVE <br /> TALENT <br /> HERE
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button className="w-36 sm:w-40 h-12 sm:h-14 border-2 text-white rounded-lg">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4">
                    <button onClick={goToPrevSlide} className="btn btn-circle btn-outline border-2 text-white">❮</button>
                    <button onClick={goToNextSlide} className="btn btn-circle btn-outline border-2 text-white">❯</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
