import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";


import Table from 'react-bootstrap/Table';
import { PiCurrencyInrThin } from "react-icons/pi";
import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const PromotioneZoneListing = () => {

    /********** Start--Switch ***************** */
    // Our States
    const [state, setState] = React.useState({ status: true });

    // Change State Function
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    /********** End--Switch ***************** */

    return (
        <>
            <Table striped bordered hover className="required-menu-table">
                <thead className="order-history">
                    <tr>
                        <th>SR No</th>
                        <th>RULE NAME</th>
                        <th>COUPON TYPE</th>
                        <th>COUPON</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>STATUS</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h5 className="mb-0">1</h5>
                        </td>
                        <td>
                            <p className="item-name">
                                50% off on Amrit
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">
                                Specific coupon
                            </p>
                        </td>
                        <td>
                            <p className="item-name">
                                1 coupon
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                All Days
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                12:00 PM - 01:00 PM
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <div className="switche">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.status}
                                                onChange={handleChange}
                                                color="primary"
                                                name="status"
                                            />
                                        }
                                    />
                                </div>
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
                            <p className="item-name">
                                50% off on Amrit
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">
                                Specific coupon
                            </p>
                        </td>
                        <td>
                            <p className="item-name">
                                1 coupon
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                All Days
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                12:00 PM - 01:00 PM
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <div className="switche">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.status}
                                                onChange={handleChange}
                                                color="primary"
                                                name="status"
                                            />
                                        }
                                    />
                                </div>
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
                            <p className="item-name">
                                50% off on Amrit
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">
                                Specific coupon
                            </p>
                        </td>
                        <td>
                            <p className="item-name">
                                1 coupon
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                All Days
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                12:00 PM - 01:00 PM
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <div className="switche">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.status}
                                                onChange={handleChange}
                                                color="primary"
                                                name="status"
                                            />
                                        }
                                    />
                                </div>
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
                            <p className="item-name">
                                50% off on Amrit
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">
                                Specific coupon
                            </p>
                        </td>
                        <td>
                            <p className="item-name">
                                1 coupon
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                All Days
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                12:00 PM - 01:00 PM
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <div className="switche">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.status}
                                                onChange={handleChange}
                                                color="primary"
                                                name="status"
                                            />
                                        }
                                    />
                                </div>
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
                            <p className="item-name">
                                50% off on Amrit
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">
                                Specific coupon
                            </p>
                        </td>
                        <td>
                            <p className="item-name">
                                1 coupon
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                All Days
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                12:00 PM - 01:00 PM
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                <div className="switche">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={state.status}
                                                onChange={handleChange}
                                                color="primary"
                                                name="status"
                                            />
                                        }
                                    />
                                </div>
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

export default PromotioneZoneListing;