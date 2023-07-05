import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { PiCurrencyInrThin } from "react-icons/pi";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import "../RequestedMenuItems/requestedMenuItems.scss";
import Offcanvas from 'react-bootstrap/Offcanvas';
import SidebarCanva from "../RequestedMenuItems/sidebarCavas/sidebarCavas";
import { IoIosArrowBack } from 'react-icons/io';

const RequestedMenuItemsLists = () => {

    /************Start-Sidebar-canvas********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Table striped bordered hover className="required-menu-table">
                <thead className="order-history">
                    <tr>
                        <th>SR No</th>
                        <th>ITEM NAME</th>
                        <th>SHOP NAME</th>
                        <th>PRICE</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h5 className="mb-0">1</h5>
                        </td>
                        <td>
                            <p className="item-name" onClick={handleShow}>
                                Jeera Rice
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Amrit Sweets</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <PiCurrencyInrThin />
                                100.00
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
                            <p className="item-name" onClick={handleShow}>
                                Jeera Rice
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Amrit Sweets</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <PiCurrencyInrThin />
                                100.00
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
                            <p className="item-name" onClick={handleShow}>
                                Jeera Rice
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Amrit Sweets</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <PiCurrencyInrThin />
                                100.00
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
                            <p className="item-name" onClick={handleShow}>
                                Jeera Rice
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Amrit Sweets</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <PiCurrencyInrThin />
                                100.00
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
                            <p className="item-name" onClick={handleShow}>
                                Jeera Rice
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Amrit Sweets</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <PiCurrencyInrThin />
                                100.00
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

            {/* start sidebar canvas */}
            <Offcanvas show={show} onHide={handleClose} placement="end">

                {/* <SidebarCanva /> */}
                <Offcanvas.Header closeButton-jeera-sidebar>
                    <Offcanvas.Title>
                        <IoIosArrowBack className="jeera-arrow" onClick={handleClose} />
                        <span className="jeera-title"> Jeera Rice</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                < SidebarCanva />

            </Offcanvas>
            {/* End sidebar canvas */}
        </>
    )

}

export default RequestedMenuItemsLists;