import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiDownArrow } from "react-icons/bi";
import "../RequestedMenuItems/requestedMenuItems.scss";
import RequestedMenuItemsLists from "./RequestedMenuItemsLists";



const RequestedMenuItems = () => {
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
                        <Breadcrumbs title="Management" breadcrumbItem="Shop" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}
                            <div className="row">
                                <div className="col-md-6">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basicDataOrder-Choose-shop">
                                            Choose shop <BiDownArrow className="Choose-shop" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="history-order">
                                            <Dropdown.Item href="#/action-2">Choose shop</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Amrit Sweets</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <div className="shop-apply" >
                                            Apply
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    < RequestedMenuItemsLists />
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



export default RequestedMenuItems;