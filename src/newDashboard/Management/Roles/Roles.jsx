import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import Table from 'react-bootstrap/Table';
import { PiCurrencyInrThin } from "react-icons/pi";

import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import "../Roles/roles.scss";


const Roles = () => {
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
                        <Breadcrumbs title="Management" breadcrumbItem="Roles" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                    {/* <p className="roles-heading">Roles</p> */}
                                </div>

                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <div className="rol-add" >
                                        <FiPlus className="plus-icons" /> Add New
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    <Table striped bordered hover className="order-history-table">
                                        <thead className="order-history">
                                            <tr>
                                                <th>SR No</th>
                                                <th>NAME</th>
                                                <th>PERMISSION</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 className="mb-0">1</h5>
                                                </td>
                                                <td>
                                                    <p className="item-name-role">
                                                        Zone manager
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Delivery Region Add/Edit,Zone Add/Edit,Zone View/Business,Zone
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
                                                    <h5 className="mb-0">2</h5>
                                                </td>
                                                <td>
                                                    <p className="item-name-role">
                                                        Zone manager
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Delivery Region Add/Edit,Zone Add/Edit,Zone View/Business,Zone
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
                                                    <h5 className="mb-0">3</h5>
                                                </td>
                                                <td>
                                                    <p className="item-name-role">
                                                        Zone manager
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Delivery Region Add/Edit,Zone Add/Edit,Zone View/Business,Zone
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
                                                    <h5 className="mb-0">4</h5>
                                                </td>
                                                <td>
                                                    <p className="item-name-role">
                                                        Zone manager
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Delivery Region Add/Edit,Zone Add/Edit,Zone View/Business,Zone
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
                                                    <h5 className="mb-0">5</h5>
                                                </td>
                                                <td>
                                                    <p className="item-name-role">
                                                        Zone manager
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="item-name-shop">
                                                        Delivery Region Add/Edit,Zone Add/Edit,Zone View/Business,Zone
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



export default Roles;