import React, { useState } from "react";
import "../../../home/category/category.scss";
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import deshes01 from "../../../../assets/foodImages/Dishes/pic-1.jpg";
import deshes02 from "../../../../assets/foodImages/Dishes/pic-3.jpg";
import rating from "../../../../assets/foodImages/Dishes/star-dishes.png";
import { IoIosArrowForward } from "react-icons/io";
import "../promo/Promo.scss";
import ratingicon from "../../../../assets/foodImages/bill/rating-bill.png";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

const PromoDesk = () => {

    // show hide populopr Dishes data
    const [showCategory, setShowCategory] = useState(false);

    const handleShowCategory = () => {
        setShowCategory(!showCategory)
    }

    return (
        <>
            {/*start- Category */}
            <div className="row">
                <div className="col-4">
                    <h5 className="category-heading">Promo</h5>
                </div>
                <div className="col-5"></div>
                <div className="col-3">
                    <p className="view-all" onClick={handleShowCategory}>View all <IoIosArrowForward className="category-arrow" /></p>
                </div>
            </div>

            <div className="row">
                {/* <div className="dash-widget-category"> */}
                <Carousel fade className="categoy-slider">
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes01}
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes02}
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes02}
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes01}
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes01}
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className=" card off-content">15% Off</p>
                                            <p className="fish-burger-promo">Fish Burger <br />
                                                <span className="dishes-prize">$5.59</span>
                                                <span className="cross-text"><del>$5.59</del>
                                                </span><br />
                                            </p>
                                            <div className="dishes-rationg-promo">
                                                <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6" style={{ flex: "right" }}>
                                            <img
                                                className="d-block populor-img-promo"
                                                src={deshes02}
                                                alt="First slide"
                                            />
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


            {/* show hide category  */}
            <div className="show-hide-contents" >
                {showCategory &&
                    <>

                        <div className="row">
                            {/* <div className="dash-widget-category"> */}
                            <Carousel fade className="categoy-slider">
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>


                            </Carousel>
                        </div >
                        <div className="row">
                            {/* <div className="dash-widget-category"> */}
                            <Carousel fade className="categoy-slider">
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item className="category-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+ User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes01}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="card card-populor-desk" style={{ width: '30rem', height: "10rem" }}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className=" card off-content">15% Off</p>
                                                        <p className="fish-burger-promo">Fish Burger <br />
                                                            <span className="dishes-prize">$5.59</span>
                                                            <span className="cross-text"><del>$5.59</del>
                                                            </span><br />
                                                        </p>
                                                        <div className="dishes-rationg-promo">
                                                            <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                            <span className="populor-review"> 5.0 1k+  User Reviews</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6" style={{ flex: "right" }}>
                                                        <img
                                                            className="d-block populor-img-promo"
                                                            src={deshes02}
                                                            alt="First slide"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>


                            </Carousel>
                        </div >

                        {/* see more button */}
                        <div className="row">
                            <div className="col-md-2">
                                <p className="Category-see-more-button"> See More </p>
                            </div>
                            <div className="col-md-10">
                                <div style={{ float: "right" }}>
                                    <div className="Category-see-Less-button" onClick={handleShowCategory}>
                                        See Less
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }


            </div>
            {/*End show hide category  */}
        </>
    )

}

export default PromoDesk;