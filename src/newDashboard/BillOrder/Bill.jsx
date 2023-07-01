import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BiDownArrow } from "react-icons/bi";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Form from 'react-bootstrap/Form';

//css 
import "../BillOrder/bill.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import img01 from "../../assets/foodImages/bill/pic-1.jpg";
import img02 from "../../assets/foodImages/bill/pic-2.jpg";
import ratingicon from "../../assets/foodImages/bill/rating-bill.png";
import { HiOutlineLocationMarker } from "react-icons/hi";


const Bill = () => {

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


    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Dashboards" breadcrumbItem="Bill order" />
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
                                    <Dropdown style={{ float: "right" }}>
                                        <Dropdown.Toggle id="dropdown-basicDataOrder">
                                            Recently <BiDownArrow className="recent-arrow" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="history-order">
                                            <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Oldest</Dropdown.Item>


                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* <select onChange={handleSelect}>
                                {renderOptions}
                            </select> */}


                                </div>
                            </div>

                            <div className="card order-bill">
                                <div className="row">
                                    <div className="col-md-2">Menu</div>
                                    <div className="col-md-2">Status</div>
                                    <div className="col-md-2">Date</div>
                                    <div className="col-md-2">Address</div>
                                    <div className="col-md-2">Total</div>
                                    <div className="col-md-2">Payment Method</div>

                                    <hr className="horiztal-bill-line" />
                                </div>

                                <Accordion>
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #1</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>
                                                   
                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row border-right">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                {/* <span className="vl"></span> */}
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row border-right" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                {/* <span className="vl"></span> */}
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}
                                                


                                                    {/* start Status */}
                                                    <div className="row border-right" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row border-right" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isCheckedOne}
                                                        onChange={handleCheckboxChangeOne}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #2</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-canceled-bill">Canceled</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-8">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #3</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-Delivering-bill">Delivering</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #4</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #5</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #6</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #7</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">

                                        <Accordion.Header>
                                            <div className="row fullwidth">
                                                <div className="col-md-2 order-menu">
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="oreder-bill-checkbox"
                                                    />
                                                    <span className="order-contetnt-bill">Order #8</span>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <div className="button-status-bill">Completed</div>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="date-table-bill">June 1, 2020, 08:22 AM</p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="table-address-bill">
                                                        <HiOutlineLocationMarker className="addres-location" />
                                                        Elm Street, 23
                                                    </p>
                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p className="total-prize-bill">$ 5.59</p>

                                                </div>
                                                <div className="col-md-2 order-menu">
                                                    <p>Cash</p>
                                                </div>
                                            </div>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Order Menu</p>

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img src={img01} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Pepperoni Pizza */}
                                                    <div className="row" style={{ marginTop: "10px" }}>
                                                        <div className="col-md-2">
                                                            <img src={img02} alt="image-Pizza" className="image-bill" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="">
                                                                <h6 className="order-menu-content">
                                                                    Pepperoni Pizza
                                                                </h6>
                                                                <p className="mb-0">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="pizza-prize-bill">+$5.59
                                                                <span className="vl"></span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Pepperoni Pizza */}

                                                    {/* start Status */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Status<br />
                                                                <span className="bill-date">Completed</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Bill */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Bills<br />
                                                                <span className="bill-date">Order #1</span>
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="status-bill">Date Paid <br />
                                                                <span className="bill-date"> June 1, 2020</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fast Food Resto</p>
                                                    <img src={ratingicon} alt="rating icon" className="rating-image-bill" />
                                                    <span> 5.0 1k+ Reviews</span>


                                                    {/* start Delivery Time */}
                                                    <div className="row" style={{ marginTop: "16px" }}>
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Delivery Time
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">10 Min

                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Status */}

                                                    {/* start Distance */}
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p className="status-bill">Distance
                                                            </p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <p className="bill-date">2.5 Km
                                                            </p>

                                                        </div>
                                                    </div>
                                                    {/* End Bill */}

                                                    {/* start Total */}
                                                    <div className="row" style={{ marginTop: "40px" }}>
                                                        <div className="col-md-6">
                                                            <p className="status-bill-total">Total </p>
                                                            <h4 className="total-amount-bill">$202.00</h4>

                                                        </div>

                                                    </div>
                                                    {/* End Total */}


                                                </div>


                                            </div>

                                        </Accordion.Body>



                                    </Accordion.Item>
                                </Accordion>
                                <div className="row">

                                </div>


                            </div>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}

export default Bill;