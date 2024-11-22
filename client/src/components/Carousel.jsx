import { useState } from 'react';

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(1);

    const handlePrevClick = (event) => {
        event.preventDefault();
        setActiveSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
    };

    const handleNextClick = (event) => {
        event.preventDefault();
        setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    };

    return (
        <div className="rounded-box carousel w-full">
            <div id="slide1" className={`carousel-item relative w-full ${activeSlide === 1 ? 'block' : 'hidden'}`}>
                <img
                    src="https://cdn.pixabay.com/photo/2024/04/05/05/17/business-8676549_640.jpg"
                    className="w-full h-70vh md:h-70vh bg-center bg-no-repeat object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle" onClick={handlePrevClick}>❮</a>
                    <a href="#slide2" className="btn btn-circle" onClick={handleNextClick}>❯</a>
                </div>
            </div>
            <div id="slide2" className={`carousel-item relative w-full ${activeSlide === 2 ? 'block' : 'hidden'}`}>
                <img
                    src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_640.jpg"
                    className="w-full h-70vh md:h-70vh bg-center bg-no-repeat object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle" onClick={handlePrevClick}>❮</a>
                    <a href="#slide3" className="btn btn-circle" onClick={handleNextClick}>❯</a>
                </div>
            </div>
            <div id="slide3" className={`carousel-item relative w-full ${activeSlide === 3 ? 'block' : 'hidden'}`}>
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_640.jpg"
                    className="w-full h-70vh md:h-70vh bg-center bg-no-repeat object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle" onClick={handlePrevClick}>❮</a>
                    <a href="#slide4" className="btn btn-circle" onClick={handleNextClick}>❯</a>
                </div>
            </div>
            <div id="slide4" className={`carousel-item relative w-full ${activeSlide === 4 ? 'block' : 'hidden'}`}>
                <img
                    src="https://cdn.pixabay.com/photo/2023/08/22/11/57/finance-8206242_640.jpg"
                    className="w-full h-70vh md:h-70vh bg-center bg-no-repeat object-cover"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle" onClick={handlePrevClick}>❮</a>
                    <a href="#slide1" className="btn btn-circle" onClick={handleNextClick}>❯</a>
                </div>
            </div>
        </div>
    );
}
