import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import "../Roles/roles.scss";


const RolesLists = () => {
    return (
        <>
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
        </>
    )
}


export default RolesLists;