import React from "react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PiCurrencyInrThin } from "react-icons/pi";
import "../sidebarCavas/sidebarCanvas.scss";

const SidebarCanva = () => {
    return (
        <>

            <Offcanvas.Body>
                <div className="row body-sidebar">
                    <div className="row">
                        <div className="col-md-7">
                            <h5 className="accept-items">Accept</h5>
                            {/* start Shop info */}
                            <div className="Shop info">
                                <p className="shop-accept">Shop info</p>
                                <p className="shiop-name">Name :</p>
                                <p className="shiop-name">Price :</p>
                                <p className="shiop-name">Description :</p>
                                <p className="shiop-name">Packaging changes:</p>
                            </div>
                            {/* End Shop info */}

                            {/* start variants info */}
                            <div className="Shop info">
                                <p className="shop-accept">Variants</p>
                                <p className="shiop-name">Name/Price :</p>
                                <p className="shiop-name">Name/Price :</p>

                            </div>
                            {/* End variants info */}
                        </div>
                        <div className="col-md-5">
                            <h5 className="reactect-items">Reject</h5>
                            {/* start Shop info */}
                            <div className="Shop info">
                                <div className="reject-contents">
                                    <p className="shiop-name">Jeera Rice</p>
                                    <p className="shiop-name"> <PiCurrencyInrThin />100.00</p>
                                    <p className="shiop-name">very Nice</p>
                                    <p className="shiop-name"> <PiCurrencyInrThin />null</p>
                                </div>
                            </div>
                            {/* End Shop info */}

                            {/* start variants info */}
                            <div className="Shop info">
                                <div className="reject-contents">
                                    <p className="shiop-name">Full/<PiCurrencyInrThin />190.00</p>
                                    <p className="shiop-name">Half/<PiCurrencyInrThin />100.00</p>
                                </div>
                            </div>
                            {/* End variants info */}
                        </div>
                    </div>

                    <h5 className="updated-info">Updated Info</h5>

                    <div className="row">
                        <div className="col-md-7">
                            {/* start Shop info */}
                            <div className="Shop info">
                                <p className="shop-accept">Shop info</p>
                                <p className="shiop-name">Name :</p>
                                <p className="shiop-name">Price :</p>
                                <p className="shiop-name">Description :</p>
                                <p className="shiop-name">Packaging changes:</p>
                            </div>
                            {/* End Shop info */}

                            {/* start variants info */}
                            <div className="Shop info">
                                <p className="shop-accept">Variants</p>
                                <p className="shiop-name">Name/Price :</p>
                                <p className="shiop-name">Name/Price :</p>

                            </div>
                            {/* End variants info */}

                        </div>
                        <div className="col-md-5">
                            {/* start Shop info */}
                            <div className="Shop info">
                                <div className="reject-contents">
                                    <p className="shiop-name">Jeera Rice</p>
                                    <p className="shiop-name"> <PiCurrencyInrThin />100.00</p>
                                    <p className="shiop-name">very Nice</p>
                                    <p className="shiop-name"> null</p>
                                </div>
                            </div>
                            {/* End Shop info */}

                            {/* start variants info */}
                            <div className="Shop info">
                                <div className="reject-contents">
                                    <p className="shiop-name"> Full/<PiCurrencyInrThin />190.00</p>
                                    <p className="shiop-name"> Half/<PiCurrencyInrThin />100.00</p>
                                </div>
                            </div>
                            {/* End variants info */}

                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </>
    )
}


export default SidebarCanva;