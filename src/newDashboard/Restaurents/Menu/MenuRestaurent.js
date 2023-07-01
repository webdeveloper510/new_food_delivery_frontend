import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BiDownArrow } from "react-icons/bi";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import CategoryRestauenrt from "../Menu/category/CategoryRestauenrt";
import PopulorDesk from "./populorDesk/PopulorDesk";
import BestSeller from "./bestSeller/BestSeller";
import PromoDesk from "./promo/PromoDesk";
import "../Menu/menu.scss";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { showAddMenuCard, hideAddMenuCard } from "../../../store/menu/actions";


import {
    Card,
    CardBody,
    FormGroup,
    CardTitle,
    CardSubtitle,
    Label,
    Input,
    FormFeedback,
    Form,
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";


const MenuRestaurent = () => {

    const dispatch = useDispatch();
    const myStore = useSelector((state) => state.showCardReducer.card);
    console.log(myStore, "myStore======>");
  
    const handleHideModal = () => {
      dispatch(hideAddMenuCard());
    };

  


    /******* start searchData ****** */
    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    };

    const handleClearBtn = () => {
        setSearchVal('');
    };

    /******* End searchData ****** */
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedOne, setIsCheckedOne] = useState(false);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckboxChangeOne = () => {
        setIsCheckedOne(!isCheckedOne);
    };

    /***********Model card*********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
 
    // Form validation 
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            Itemtitle: '',
            itempricing: '',
            deliveryCharge: '',
            gst: '',
            phoneNumber: '',
            emailAddress: '',
        },
        validationSchema: Yup.object({
            Itemtitle: Yup.string().required("Please Enter Your Item Title"),
            itempricing: Yup.string().required("Please Enter Your Item Pricing"),
            deliveryCharge: Yup.string().required("Please Enter Your Delivery Charge"),
            gst: Yup.string().required("Please Enter Your Gst"),
            phoneNumber: Yup.string().required("Please Enter Your Phone Number"),
            emailAddress: Yup.string().required("Please Enter Your Email Address"),
        }),
        onSubmit: (values) => {
            console.log("values", values);
            // handleClose();
        }
    });



    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Restaurant" breadcrumbItem="Menu" />
                        <Row>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='search-order-data'>
                                        <i className="fas fa-search search-order"></i>
                                        <input
                                            onChange={handleInput}
                                            value={searchVal}
                                            type="text"
                                            name="product-search"
                                            id="product-search"
                                            placeholder="Search Products"
                                        />
                                        <i onClick={handleClearBtn} className="fas fa-times cut-data"></i>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <div className="add-menu-new" onClick={handleShow}>
                                            ADD NEW MENU
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*start- Category */}
                            <CategoryRestauenrt />
                            {/*End- Category */}

                            {/*start- PopulorDesk */}
                            <PopulorDesk />
                            {/*End- PopulorDesk */}

                            {/*start- BestSeller */}
                            <BestSeller />
                            {/*End- BestSeller */}

                            {/*start- BestSeller */}
                            <PromoDesk />
                            {/*End- BestSeller */}

                        </Row>
                    </Container>
                </div>
            </React.Fragment>

            {/* model card  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="needs-validation"
                        onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}
                    >
                        <Row>
                            <Col md="12">
                                <Label htmlFor="validationCustom01">Select category</Label><br />
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        checked
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Non veg
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                       
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Veg
                                    </label>
                                </div>
                            </Col>
                        </Row>

                        <Row style={{ marginTop: "20px" }}>
                            <Col md="12">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">Item Title</Label>
                                    <Input
                                        name="Itemtitle"
                                        placeholder="Item Title"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.Itemtitle || ""}
                                        invalid={
                                            validation.touched.Itemtitle && validation.errors.Itemtitle ? true : false
                                        }
                                    />
                                    {validation.touched.Itemtitle && validation.errors.Itemtitle ? (
                                        <FormFeedback type="invalid">{validation.errors.Itemtitle}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom04">Item Pricing</Label>
                                    <Input
                                        name="itempricing"
                                        placeholder="Item Pricing"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom04"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.itempricing || ""}
                                        invalid={
                                            validation.touched.itempricing && validation.errors.itempricing ? true : false
                                        }
                                    />
                                    {validation.touched.itempricing && validation.errors.itempricing ? (
                                        <FormFeedback type="invalid">{validation.errors.itempricing}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom03">Delivery Charge</Label>
                                    <Input
                                        name="deliveryCharge"
                                        placeholder="Delivery Charge"
                                        type="text"
                                        className="form-control"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.deliveryCharge || ""}
                                        invalid={
                                            validation.touched.deliveryCharge && validation.errors.deliveryCharge ? true : false
                                        }
                                    />
                                    {validation.touched.deliveryCharge && validation.errors.deliveryCharge ? (
                                        <FormFeedback type="invalid">{validation.errors.deliveryCharge}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>

                            <Col md="4">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom05">GST</Label>
                                    <Input
                                        name="gst"
                                        placeholder="GST"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom05"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.gst || ""}
                                        invalid={
                                            validation.touched.gst && validation.errors.gst ? true : false
                                        }
                                    />
                                    {validation.touched.gst && validation.errors.gst ? (
                                        <FormFeedback type="invalid">{validation.errors.gst}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">Phone Number</Label>
                                    <Input
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.phoneNumber || ""}
                                        invalid={
                                            validation.touched.phoneNumber && validation.errors.phoneNumber ? true : false
                                        }
                                    />
                                    {validation.touched.phoneNumber && validation.errors.phoneNumber ? (
                                        <FormFeedback type="invalid">{validation.errors.phoneNumber}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">Email Address</Label>
                                    <textarea
                                        name="emailAddress"
                                        rows="3"
                                        placeholder="Email Address"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.emailAddress || ""}
                                        invalid={
                                            validation.touched.emailAddress && validation.errors.emailAddress ? true : false
                                        }
                                    />
                                    {validation.touched.emailAddress && validation.errors.emailAddress ? (
                                        <FormFeedback type="invalid">{validation.errors.emailAddress}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>

                        <Modal.Footer style={{ marginTop: "20"}}>
                            <Button  onClick={handleClose} className="add-menu-new-close">
                                Close
                            </Button>
                            <Button type="submit"  className="add-menu-new-button">
                                Save Changes
                            </Button>

                        </Modal.Footer>
                    </Form>

                </Modal.Body>
            </Modal >


        </>
    )
}

export default MenuRestaurent;