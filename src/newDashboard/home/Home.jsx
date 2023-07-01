import React from "react";
import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import HomeCarousel from "./HomeCarousel";
import Card from 'react-bootstrap/Card';
import { BsBoxArrowInDown, BsBoxArrowInUp } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import Category from "./category/Category";
import Dishes from "./dishes/Dishes";
import RecentOrder from "./recentOrders/recentOrder";
import "../home/home.scss";



const Home = () => {
    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Dashboards" breadcrumbItem="Main Menu" />
                        <Row>

                            {/* <!-- ======= Start---main section ======= --> */}
                            <section className="main-section">
                                <div className="row">
                                    <div className="col-md-7 ">
                                        {/* start-carousel */}
                                        < HomeCarousel />
                                        {/*End-carousel */}

                                        {/*start- Category */}
                                        <Category />
                                        {/*End- Category */}

                                        {/*start- Dishes */}
                                        <Dishes />
                                        {/*End- Dishes */}

                                        {/*start- Dishes */}
                                        <RecentOrder />
                                        {/*End- Dishes */}
                                    </div>

                                    <div className="col-md-5 ">
                                        <div className="dash-widget">
                                            <h5 className="balance_text">Your Balance</h5>
                                            <Card style={{ width: '22rem', height: '170px' }} className="home_card">
                                                <Card.Body>
                                                    <Card.Title>Balance</Card.Title>
                                                    <h2 className="balance_amount">$12.000</h2>
                                                    <Card.Link href="#"><BsBoxArrowInDown />Top Up</Card.Link>
                                                    <Card.Link href="#"><BsBoxArrowInUp />Transfer</Card.Link>
                                                </Card.Body>
                                            </Card>

                                            <div className="next-content">
                                                <div className="row">
                                                    <p className="address-content">Your Address</p>
                                                    <div className="col-md-6">
                                                        <h5><CiLocationOn className="location-icon" />
                                                            <span className="location-content">Elm Street, 23</span>
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button className="change-button">change</button>
                                                    </div>
                                                </div>
                                                <p className="location-lorem">Lorem ipsum dolor sit amet,consectetur elit,
                                                    sed do <br></br> eiusmod tempor incididunt.
                                                </p>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="button-details">Add Details</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="button-details">Add Note</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-overlay" data-reff=""></div>
                            </section>
                            {/* <!-- ======= End---main section ======= --> */}
                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        </>
    )
}

export default Home;