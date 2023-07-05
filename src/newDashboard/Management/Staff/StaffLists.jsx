import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "../Staff/staff.scss";

const StaffLists = () => {

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
                        <th>UNIQUE ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>ZONE</th>
                        <th>CONTACT NUMBER</th>
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
                                0000200
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Jeera Rice</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Zone manager
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Chandigarh
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                9823323232
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
                                0000201
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Jeera Rice</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Zone manager
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Chandigarh
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                9823323232
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
                                0000202
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Jeera Rice</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Zone manager
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Chandigarh
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                9823323232
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
                                0000203
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Jeera Rice</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Zone manager
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Chandigarh
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                9823323232
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
                                0000204
                            </p>
                        </td>
                        <td>
                            <p className="item-name-shop">Jeera Rice</p>
                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Zone manager
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                Chandigarh
                            </p>

                        </td>
                        <td>
                            <p className="total-shop-prize">
                                9823323232
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

export default StaffLists;