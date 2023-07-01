import React from "react";
import "../../home/category/category.scss";
import Carousel from 'react-bootstrap/Carousel';
import FaHamburger from "react-icons/fa";
import legbon01 from "../../../assets/foodImages/category/legbon.png";
import burger from "../../../assets/foodImages/category/burger.png";
import bakery from "../../../assets/foodImages/category/bakery.png";
import { IoIosArrowForward } from "react-icons/io";
const Category = () => {
    return (
        <>
            {/*start- Category */}
            <div className="row">
                <div className="col-2">
                    <h5 className="category-heading">Category</h5>
                </div>
                <div className="col-7"></div>
                <div className="col-3">
                    <p className="view-all">View all <IoIosArrowForward className="category-arrow" /></p>
                </div>
            </div>

            <div className="row">
                {/* <div className="dash-widget-category"> */}
                <Carousel fade className="categoy-slider">
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={legbon01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Chiken</p>
                                    </Carousel.Caption>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={burger}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Burger</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bakery}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Bakery</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={burger}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Burger</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bakery}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Bakery</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={legbon01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Chiken</p>
                                    </Carousel.Caption>

                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bakery}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Bakery</p>
                                    </Carousel.Caption>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={legbon01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Chiken</p>
                                    </Carousel.Caption>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={burger}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Burger</p>
                                    </Carousel.Caption>
                                </div>
                            </div>


                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>

            {/* </div> */}
            {/*End- Category */}
        </>
    )
}


export default Category;