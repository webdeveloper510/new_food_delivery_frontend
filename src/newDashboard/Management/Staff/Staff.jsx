import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import Table from 'react-bootstrap/Table';
import { PiCurrencyInrThin } from "react-icons/pi";
import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "../Staff/staff.scss";


const Staff = () => {
    /******* start searchData ****** */
    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    };

    const handleClearBtn = () => {
        setSearchVal('');
    };

    /******* End searchData ****** */

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
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Management" breadcrumbItem="Staff" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                    {/* <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basicDataOrder-Choose-shop">
                                            Choose shop <BiDownArrow className="Choose-shop" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="history-order">
                                            <Dropdown.Item href="#/action-2">Choose shop</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Oldest</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> */}
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



export default Staff;