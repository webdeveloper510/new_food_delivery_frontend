import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BiDownArrow } from "react-icons/bi";
import Breadcrumbs from "../../components/Common/Breadcrumb";

// import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import { BiDownArrow } from "react-icons/bi";
// import Breadcrumbs from "../../components/Common/Breadcrumb";

import { orderData } from "../foodOrder/orderData";
import "../foodOrder/FoodOrder.scss";
import image from "../../assets/foodImages/foodOrder/orderimage.jpg";
import ratingimage  from "../../assets/foodImages/bill/rating-bill.png"


//css

const FoodOrder = () => {

    /******* start searchData ****** */
    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    };

    const handleClearBtn = () => {
        setSearchVal('');
    };

    /******* End searchData ****** */
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedOne, setIsCheckedOne] = useState(false);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckboxChangeOne = () => {
        setIsCheckedOne(!isCheckedOne);
    };

    const orderDataShow = orderData.map((e, i) => {
        return (
            <>
                <div className="container-fluid " key={i}>
                    <div className="row mx-1">
                        <div className="col  card card-food-order my-2 ">
                            <h6 className="text-center pt-4">Order#{i + 1}</h6>
                            <p className="text-center">{e.time}</p>
                            <hr className="food-order"  style={{width:"50%;",textalign:"left;",marginleft:"0"}}></hr>
                            <h5>{e.title}</h5>
                            <p> <i className="bi bi-star orderStarIcon"></i>
                            
                            <img src={ratingimage} alt="rating-icon" className="rating-food-img"/>
                            {e.rating}</p>
                            <hr className="food-order" />
                            <div>
                                <p className="d-inline-block">Delivery Time</p>
                                <h6 className="d-inline-block float-end">{e.deliveryTime} min </h6>
                                <div className="clearfix"></div>
                            </div>
                            <div>
                                <p className="d-inline-block">Distance</p>
                                <h6 className="d-inline-block float-end">{e.distance} km </h6>
                            </div>
                            <hr className="food-order" />
                            <h6>Order Menu</h6>
                            <div >
                                <div>
                                    <div className="orderImage rounded p-1 my-1  d-inline-block" >

                                        <img src={image} className="w-100" alt="images" />
                                    </div>
                                    <span className="ps-1">{e.order1}</span>
                                    <h6 className="d-flex float-end pt-3 productPrice">+$ {e.price}</h6>
                                </div>
                                <div>
                                    <div className="orderImage rounded p-1 d-inline-block">
                                        <img src={image} className="w-100" alt="images" />
                                    </div>
                                    <span className="ps-1">{e.order2}</span>
                                    <h6 className="d-flex float-end pt-3 productPrice">+$ {e.price}</h6>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h6 className="d-inline-block totoal-order">Total</h6>
                                <h6 className="float-end pt-1 productPrice">$  {e.price + e.price}</h6>
                            </div>
                            <div>
                                <button type="button" className="btn w-100 my-3 py-2 orderButton">{e.button}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Dashboards" breadcrumbItem="Food Order" />
                        <Row>
                            {/* <div className="row">
                                <div className="col-md-6">
                                    <div className='search-order-data'>
                                        <i className="fas fa-search search-order"></i>
                                        <input
                                            onChange={handleInput}
                                            value={searchVal}
                                            type="text"
                                            name="product-search"
                                            id="product-search"
                                            placeholder="Search Products"
                                        />
                                        <i onClick={handleClearBtn} className="fas fa-times cut-data"></i>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <div className="add-menu-new">
                                            ADD NEW MENU
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* main started */}
                            <div className="container ">
                                <div className="row row-cols-lg-3 row-cols-md-2 row cols-sm-1 ">
                                    {orderDataShow}
                                </div>
                            </div>
                               {/* End main started */}

                        </Row>
                    </Container>
                </div>
            </React.Fragment>


        </>
    )

}

export default FoodOrder;