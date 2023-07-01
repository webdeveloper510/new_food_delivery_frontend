import React from "react";
import "../../home/category/category.scss";
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import img01 from "../../../assets/foodImages/recentOrder/pic-1.jpg";
import img02 from "../../../assets/foodImages/recentOrder/pic-2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import "../../home/dishes/disk.scss";
import "../../home/recentOrders/recentOrder.scss";

const RecentOrder = () => {
    return (
        <>
            {/*start- Category */}
            <div className="row">
                <div className="col-4">
                    <h5 className="category-heading">Recent Order</h5>
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
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentlegbon01"
                                        src={img01}
                                        alt="First slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="personal-pizza">Pepperoni Pizza <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentburger"
                                        src={img02}
                                        alt="Second slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="fride-rice">Fried Rice <br />
                                                <span className="dishes-prize">$5.59</span><br />
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentburger"
                                        src={img02}
                                        alt="Second slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="fride-rice">Fried Rice <br />
                                                <span className="dishes-prize">$5.59</span><br />
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentlegbon01"
                                        src={img01}
                                        alt="First slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="personal-pizza">Pepperoni Pizza <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentlegbon01"
                                        src={img01}
                                        alt="First slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="personal-pizza">Pepperoni Pizza <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-desk" style={{ width: '16rem', height: "17rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-2">
                                            <AiOutlineHeart style={{ color: "red" }} />
                                        </div>
                                    </div>
                                    <img
                                        className="d-block recentburger"
                                        src={img02}
                                        alt="Second slide"
                                        style={{ width: "10rem", height: "10rem" }}
                                    />
                                    <div className="row ratin-data" >
                                        <div className="col-md-12">

                                            <p className="fride-rice">Fried Rice <br />
                                                <span className="dishes-prize">$5.59</span><br />
                                                <p className="times-delivery">4.97 km = 21 min</p>
                                            </p>
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


export default RecentOrder;