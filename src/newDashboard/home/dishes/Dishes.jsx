import React from "react";
import "../../home/category/category.scss";
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import deshes01 from "../../../assets/foodImages/Dishes/pic-1.jpg";
import deshes02 from "../../../assets/foodImages/Dishes/pic-3.jpg";
import rating from "../../../assets/foodImages/Dishes/star-dishes.png";
import { IoIosArrowForward } from "react-icons/io";
import "../../home/dishes/disk.scss";

const Dishes = () => {
    return (
        <>
            {/*start- Category */}
            <div className="row">
                <div className="col-4">
                    <h5 className="category-heading">Popular Dishes</h5>
                </div>
                <div className="col-5"></div>
                <div className="col-3">
                    <p className="view-all">View all <IoIosArrowForward className="category-arrow" /></p>
                </div>
            </div>

            <div className="row">
                {/* <div className="dash-widget-category"> */}
                <Carousel fade className="categoy-slider">
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>

                                    <img
                                        className="d-block w-100 legbon01"
                                        src={deshes01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} className="heart-icons" />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block w-100 burger"
                                        src={deshes02}
                                        alt="Second slide"
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block w-100 burger"
                                        src={deshes02}
                                        alt="Second slide"
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} className="heart-icons"/>
                                        </div>
                                    </div>

                                    <img
                                        className="d-block w-100 legbon01"
                                        src={deshes01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>

                                    <img
                                        className="d-block w-100 legbon01"
                                        src={deshes01}
                                        alt="First slide"
                                    // style={{width: "130px", height: "50px"}}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "19rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} className="heart-icons" />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block w-100 burger"
                                        src={deshes02}
                                        alt="Second slide"
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-6">
                                            <img src={rating} alt="ratin-img" className="rating-image" />
                                            <p className="fish-burger">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                            </p>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="button-dishes-add">
                                                <span className="plus-icon"> + </span></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>


                </Carousel>
            </div >

            {/* </div> */}
            {/*End- Category */}
        </>
    )

}

export default Dishes;