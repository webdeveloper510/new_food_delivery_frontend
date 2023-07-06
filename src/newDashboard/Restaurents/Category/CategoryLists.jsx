import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiDownArrow } from "react-icons/bi";
import Table from 'react-bootstrap/Table';
import { PiCurrencyInrThin } from "react-icons/pi";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import "../../Restaurents/Category/CategoryLists.scss";
import imageicon01 from "../../../assets/foodImages/orderHistory/pic-1.jpg";
import imageicon02 from "../../../assets/foodImages/orderHistory/pic-2.jpg";
import imageicon03 from "../../../assets/foodImages/orderHistory/pic-3.jpg";
import imageicon04 from "../../../assets/foodImages/orderHistory/pic-4.jpg";
import imageicon05 from "../../../assets/foodImages/orderHistory/pic-5.jpg";


const CategoryLists = () => {
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
                        <Breadcrumbs title="Management" breadcrumbItem="Product Lists" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}
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
                                            ADD CATEGORY
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    <Table striped bordered hover className="required-menu-table">
                                        <thead className="order-history">
                                            <tr>
                                                <th>Product ID</th>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th>Prize</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 className="mb-0">01475</h5>
                                                </td>
                                                <td>
                                                    <div className="media-bx-category d-flex align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon01} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Fish Burger</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        6741
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        In Stcok
                                                    </p>

                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        <PiCurrencyInrThin />47
                                                    </p>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-shop-table" />
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
                                                    <h5 className="mb-0">01487</h5>
                                                </td>
                                                <td>
                                                    <div className="media-bx-category d-flex align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon02} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Piza</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        6734
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                       Out of Stcok
                                                    </p>

                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        <PiCurrencyInrThin />147
                                                    </p>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-shop-table" />
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
                                                    <h5 className="mb-0">01499</h5>
                                                </td>
                                                <td>
                                                    <div className="media-bx-category d-flex align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon03} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Burger</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        6788
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        In Stcok
                                                    </p>

                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        <PiCurrencyInrThin />47
                                                    </p>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-shop-table" />
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
                                                    <h5 className="mb-0">01475</h5>
                                                </td>
                                                <td>
                                                    <div className="media-bx-category d-flex align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon04} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">Egg Fried</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        6877
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        In Stcok
                                                    </p>

                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        <PiCurrencyInrThin />407
                                                    </p>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-shop-table" />
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
                                                    <h5 className="mb-0">09975</h5>
                                                </td>
                                                <td>
                                                    <div className="media-bx-category d-flex align-items-center">
                                                        <img className="me-3 rounded-circle" src={imageicon05} alt="images" />
                                                        <div>
                                                            <h5 className="mb-0">chiken</h5>
                                                            <p className="mb-0">1x </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        6799
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Out of Stcok
                                                    </p>

                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        <PiCurrencyInrThin />47
                                                    </p>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                            <BsThreeDots className="action-shop-table" />
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



export default CategoryLists;