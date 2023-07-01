import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import homeimg01 from '../../assets/foodImages/home/pic-1.jpg';
import homeimg02 from '../../assets/foodImages/home/pic-3.jpg';
import homeimg03 from '../../assets/foodImages/home/pic-4.jpg';

const HomeCarousel = () => {
    return (
        <>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 homeCarouselImag"
                        src={homeimg01}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 homeCarouselImag"
                        src={homeimg02}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 homeCarouselImag"
                        src={homeimg03}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomeCarousel;