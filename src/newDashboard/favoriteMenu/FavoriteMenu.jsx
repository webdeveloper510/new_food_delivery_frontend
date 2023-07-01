import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BiDownArrow } from "react-icons/bi";
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { menuData } from "../favoriteMenu/menuData";
import image from "../../assets/foodImages/faviorteOrder/menuPageImg.jpg";
import "../favoriteMenu/favoriteMenu.scss";
import ratingimage  from "../../assets/foodImages/bill/rating-bill.png"

//css

const FavoriteMenu = () => {

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


    const showDataOfMenu = menuData.map((e, i) => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col mx-3 my-3 rounded menuCard">
                            <div>
                                <div className="float-end pt-3">
                                    <i className="bi bi-heart  px-3  orderHeartIcon "></i>
                                </div>
                                <img src={image} className="img-fluid" />
                            </div>
                            <div className="px-3">
                                <h5>{e.title}</h5>
                                <i className="bi bi-star menuStarReview"></i>
                                <span>
                                    <img src={ratingimage}  alt="rating-icon" className="rating-food-img"/>
                                    {e.rating}
                                    </span>
                                <span className="px-3">{e.review}</span>
                                <span>{e.distance}</span>
                                <hr />
                                <div>
                                    <div className="d-inline-block">
                                        <h5 ><strong>{e.product}</strong></h5>
                                        <h4 className="menuProductPrice ">{e.productPrice}</h4>
                                    </div>
                                    <div className="float-end d-flex align-item-center">
                                        <button className="rounded  menuBtn fs-3 px-3 py-1 " >+</button>
                                    </div>
                                </div>
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
                        <Breadcrumbs title="Dashboards" breadcrumbItem="Favorite Menu" />
                        <Row>
                            <div className="row">
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
                            </div>
                            {/* started main page  */}
                            <div className="container">
                                {/* <div className="mt-4 mb-2  w-50 rounded " style={{ border: '1px solid #777777' }} >
                                    <i className="bi bi-search  ps-3 menuSearchBarIcon"></i>
                                    <input className="w-50 form-control menuSearchInput  d-inline-block  py-2 "
                                        placeholder="What do you want  eat today..." />
                                </div> */}
                                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 ">
                                    {showDataOfMenu}
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}




export default FavoriteMenu;