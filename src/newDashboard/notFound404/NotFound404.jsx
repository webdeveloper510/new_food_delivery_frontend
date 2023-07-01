import React from "react";
import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import Card from 'react-bootstrap/Card';
import cat01 from "../../assets/foodImages/notFound/cat.png";
import logo from "../../assets/foodImages/signup/logo-full.png";
import { Link } from "react-router-dom";
import "../notFound404/notFounde.scss";

const NotFound404 = () => {
    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <div className="main-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <Card style={{ width: '58rem', height: "535px" }} className="Not-found-Card">
                                        <Card.Body>

                                            <Card.Text>
                                                <img src={logo} alt="logo" />
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <p className="first-content">4</p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img src={cat01} alt="cat-image" className="cat-image" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p className="second-content">4</p>
                                                    </div>
                                                    <div className="content-notfound">
                                                        <p className="content-p">Page Not Found</p>
                                                        <p className="not-found-lorem">Lorem lpsum is simply dummy text of the printing and
                                                            typesetting industry. Lorem<br /> lpsum has been the industry's
                                                            standard dummy text ever since the 1500.
                                                        </p>
                                                        <Link to="/" className="home-back">Homepage</Link>

                                                    </div>

                                                </div>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>



                                    <div className="col-md-2"></div>

                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}

export default NotFound404;