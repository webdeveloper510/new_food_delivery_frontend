import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import deshes01 from "../../../../assets/foodImages/BestSeller/pic-1.jpg";
import deshes02 from "../../../../assets/foodImages/BestSeller/pic-2.jpg";
import deshes03 from "../../../../assets/foodImages/BestSeller/pic-3 .jpg";
import rating from "../../../../assets/foodImages/Dishes/star-dishes.png";
import { IoIosArrowForward } from "react-icons/io";
import ratingicon from "../../../../assets/foodImages/bill/rating-bill.png";
import { BsThreeDotsVertical, BsThreeDots} from "react-icons/bs";
import {FaArrowUp} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import "../bestSeller/BestSeller.scss";

const BestSeller = () => {
    return (
        <>
            {/*start- Category */}
            <div className="row">
                <div className="col-4">
                    <h5 className="category-heading">Best Seller</h5>
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
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes01} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes02} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '20rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes03} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes02} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes01} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '20rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes03} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="category-items">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes03} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '21rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes02} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-populor-desk" style={{ width: '20rem', height: "21rem" }}>
                                    <div className="row">
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-7">
                                        </div>
                                        <div className="col-md-2">
                                            <div className="">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                        <BsThreeDots className="action-table" />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <img src={deshes01} alt="best-img01" className="best-img01" />
                                    </div>

                                    <div className="row">
                                        <p className="fish-burger-seller">Pepperoni Pizza <br />
                                            <span className="dishes-prize-seller">$5.59</span><br />
                                        </p>
                                        <div class="d-flex align-items-center justify-content-center">
                                        <p class="mb-0 pe-2 border-right">Sold 1k</p>
                                        <p class="mb-0 ps-2 text-success font-w600">+ 15%</p>
                                        < FaArrowUp className="arrow-up"/>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </div >

            {/* </div> */}
            {/*End- Category */}
        </>
    )

}

export default BestSeller;