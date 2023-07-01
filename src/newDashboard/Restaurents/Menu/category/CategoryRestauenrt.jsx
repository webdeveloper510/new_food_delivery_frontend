import React from "react";
import "../category/categoryRestaurent.scss";
import Carousel from 'react-bootstrap/Carousel';
import FaHamburger from "react-icons/fa";
import legbon01 from "../../../../assets/foodImages/category/legbon.png";
import burger from "../../../../assets/foodImages/category/burger.png";
import bakery from "../../../../assets/foodImages/category/bakery.png";
import pointer from "../../../../assets/foodImages/category/pointer.png";
import buket from "../../../../assets/foodImages/category/buket.png";
import bon from "../../../../assets/foodImages/category/bon.png";
import { IoIosArrowForward } from "react-icons/io";

const CategoryRestauenrt = () => {
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={pointer}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Pizza</p>
                                    </Carousel.Caption>

                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={buket}
                                        alt="Second slide"
                                        style={{width: "145px" ,height: "117px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>cold drink</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bon}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>bon</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={pointer}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Pizza</p>
                                    </Carousel.Caption>

                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={buket}
                                        alt="Second slide"
                                        style={{width: "145px" ,height: "117px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>cold drink</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bon}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>bon</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 legbon01"
                                        src={pointer}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>Pizza</p>
                                    </Carousel.Caption>

                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 burger"
                                        src={buket}
                                        alt="Second slide"
                                        style={{width: "145px" ,height: "117px"}}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>cold drink</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
                                    <img
                                        className="d-block w-100 bakery"
                                        src={bon}
                                        alt="Third slide"
                                        style={{ width: "100px", height: "80px" }}
                                    />
                                    <Carousel.Caption className="chiken-content">
                                        <p>bon</p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                            <div className="col-md-2">
                                <div className="card card-resturent" style={{ width: '10rem', height: "10rem" }}>
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
                  
                </Carousel>
            </div>

            {/* </div> */}
            {/*End- Category */}
        </>
    )
}


export default CategoryRestauenrt;