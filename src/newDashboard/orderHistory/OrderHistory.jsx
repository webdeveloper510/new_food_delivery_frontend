import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Table from 'react-bootstrap/Table';
import imageicon01 from "../../assets/foodImages/orderHistory/pic-1.jpg";
import imageicon02 from "../../assets/foodImages/orderHistory/pic-2.jpg";
import imageicon03 from "../../assets/foodImages/orderHistory/pic-3.jpg";
import imageicon04 from "../../assets/foodImages/orderHistory/pic-4.jpg";
import imageicon05 from "../../assets/foodImages/orderHistory/pic-5.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";

import Dropdown from 'react-bootstrap/Dropdown';
import { MDBSelect } from 'mdb-react-ui-kit';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import {BiDownArrow} from "react-icons/bi";
import "../orderHistory/orderHistory.scss";


const OrderHistory = () => {
    /******* start searchData ****** */
    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    };

    const handleClearBtn = () => {
        setSearchVal('');
    };

    /******* End searchData ****** */



    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                          <Breadcrumbs title="Dashboards" breadcrumbItem="Order History" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                    <div className='search-order-data'>
                                        <i className="fas fa-search search-order"></i>
                                        <label htmlFor="product-search" id="input-label">
                                            Product Search
                                        </label>
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
                                            Recently <BiDownArrow className="recent-arrow"/>
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

                            <div className="row">
                                <div className="card order-history">
                                    <Table striped bordered hover className="order-history-table">
                                        <thead className="order-history">
                                            <tr>
                                                <th>Menu</th>
                                                <th>Date</th>
                                                <th>Address</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="media-bx d-flex py-3  align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon01} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Fish Burger</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="date-table">June 1, 2020, 08:22 AM</p>
                                                </td>
                                                <td>
                                                    <p className="table-address">
                                                        <HiOutlineLocationMarker className="addres-location" /> Elm Street, 23 Yogyakarta 2,97 Km
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="total-prize">$ 5.59</p>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="button-status">Completed</div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="button-status01">Order Again</div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-table" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media-bx d-flex py-3  align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon02} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Pepperoni Pizza</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="date-table">June 1, 2020, 08:22 AM</p>
                                                </td>
                                                <td>
                                                    <p className="table-address">
                                                        <HiOutlineLocationMarker className="addres-location" /> Elm Street, 23 Yogyakarta 2,97 Km
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="total-prize">$ 5.59</p>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="button-Delivering">Delivering</div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="button-status01">Order Again</div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-table" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media-bx d-flex py-3  align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon03} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Beef Burger</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="date-table">June 1, 2020, 08:22 AM</p>
                                                </td>
                                                <td>
                                                    <p className="table-address">
                                                        <HiOutlineLocationMarker className="addres-location" /> Elm Street, 23 Yogyakarta 2,97 Km
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="total-prize">$ 5.59</p>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-lg-6">

                                                            <div className="button-canceled">Canceled</div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="button-status01">Order Again</div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-table" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media-bx d-flex py-3  align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon04} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Japanese Ramen</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="date-table">June 1, 2020, 08:22 AM</p>
                                                </td>
                                                <td>
                                                    <p className="table-address">
                                                        <HiOutlineLocationMarker className="addres-location" /> Elm Street, 23 Yogyakarta 2,97 Km
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="total-prize">$ 5.59</p>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="button-status">Completed</div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="button-status01">Order Again</div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-table" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media-bx d-flex py-3  align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon05} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Vegan Pizza</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="date-table">June 1, 2020, 08:22 AM</p>
                                                </td>
                                                <td>
                                                    <p className="table-address">
                                                        <HiOutlineLocationMarker className="addres-location" /> Elm Street, 23 Yogyakarta 2,97 Km
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="total-prize">$ 5.59</p>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="button-status">Completed</div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="button-status01">Order Again</div>
                                                        </div>
                                                    </div>


                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-table" />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>

                            </div>

                            {/* <!-- ======= End---main section ======= --> */}
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}



export default OrderHistory;