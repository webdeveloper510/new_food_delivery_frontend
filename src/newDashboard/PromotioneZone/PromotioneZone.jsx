import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { FiPlus } from "react-icons/fi";
import PromotioneZoneListing from "./PromotioneZoneListing";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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


const PromotioneZone = () => {
    /***********Model card*********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {

            ruleName: '',
            ruleDescription: '',
            couponType: "",
            status: "",
            startTime: "",
            EendTime: "",
            priority: "",
            other: "",
        },
        validationSchema: Yup.object({

            ruleName: Yup.string().required('Rule Name is required'),
            ruleDescription: Yup.string().required('Rule Description is required'),
            couponType: Yup.string().required("Please Enter Your Zone"),
            rolstatuse: Yup.string().required("Please Enter Your status"),
            startTime: Yup.string().required("Please Enter Your Start Time"),
            EendTime: Yup.string().required("Please Enter Your Start End Time"),
            priority: Yup.string().required("Please Enter Your Priority"),
            other: Yup.string().required("Please Enter Your other"),

        }),
        onSubmit: async (values, { resetForm }) => {
            dispatch(registerUser(values));

        }

    });

    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Management" breadcrumbItem="Promo Codes" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <button className="rol-add" onClick={handleShow} >
                                            <FiPlus className="plus-icons" /> Add Promocode
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    <PromotioneZoneListing />
                                </div>
                            </div>
                            {/* <!-- ======= End---main section ======= --> */}

                            {/* Start model card  */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Promocode</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    {/* <AddStaff /> */}
                                    <Form className="needs-validation"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                    >
                                        <p className="staff-Details">BASIC INFORMATION</p>

                                        <div className="row" style={{ marginTop: "20px" }}>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Rule Name</Label>
                                                    <Input
                                                        name="ruleName"
                                                        type="text"
                                                        placeholder="Enter Rule Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.ruleName || ""}
                                                        invalid={
                                                            validation.touched.ruleName && validation.errors.ruleName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.ruleName && validation.errors.ruleName ? (
                                                        <FormFeedback type="invalid">{validation.errors.ruleName}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Rule Description</Label>
                                                    <Input
                                                        name="ruleDescription"
                                                        type="text"
                                                        placeholder="Enter Rule Description"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.ruleDescription || ""}
                                                        invalid={
                                                            validation.touched.ruleDescription && validation.errors.ruleDescription ? true : false
                                                        }
                                                    />
                                                    {validation.touched.ruleDescription && validation.errors.ruleDescription ? (
                                                        <FormFeedback type="invalid">{validation.errors.ruleDescription}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Coupon Type</Label>
                                                    <select
                                                        className="form-select form-select-md"
                                                        aria-label=".form-select-md example"
                                                        name="couponType" // Add the name attribute
                                                        value={validation.values.couponType} // Bind the value to the formik values
                                                        onChange={validation.handleChange} // Bind the change event handler
                                                        onBlur={validation.handleBlur} // Bind the blur event handler
                                                    >
                                                        <option value="" selected>
                                                            Choose CouponType
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    {validation.touched.couponType && validation.errors.couponType ? (
                                                        <FormFeedback type="invalid">{validation.errors.couponType}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Select Status</Label>
                                                    <select
                                                        className="form-select form-select-md"
                                                        aria-label=".form-select-md example"
                                                        name="status" // Add the name attribute
                                                        value={validation.values.status} // Bind the value to the formik values
                                                        onChange={validation.handleChange} // Bind the change event handler
                                                        onBlur={validation.handleBlur} // Bind the blur event handler
                                                    >
                                                        <option value="" selected>
                                                            Choose Status
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    {validation.touched.status && validation.errors.status ? (
                                                        <FormFeedback type="invalid">{validation.errors.status}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <Row>
                                                <Col md="12">
                                                    <Label htmlFor="validationCustom01">Select Category</Label><br />
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault1"
                                                            checked
                                                        />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            All Days
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
                                                            Specific Dates
                                                        </label>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div className="col-md-6" style={{ marginTop: "10px" }}>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="example-time-input"
                                                        className="col-md-12 col-form-label"
                                                    >
                                                        Choose Start Time
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="time"
                                                            defaultValue="13:45:00"
                                                            id="example-time-input"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" style={{ marginTop: "10px" }}>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="example-time-input"
                                                        className="col-md-12 col-form-label"
                                                    >
                                                        Choose End Time
                                                    </label>
                                                    <div className="col-md-10">
                                                        <input
                                                            className="form-control"
                                                            type="time"
                                                            defaultValue="13:45:00"
                                                            id="example-time-input"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Priority</Label>
                                                    <Input
                                                        name="priority"
                                                        type="text"
                                                        placeholder="Enter Priority"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.priority || ""}
                                                        invalid={
                                                            validation.touched.priority && validation.errors.priority ? true : false
                                                        }
                                                    />
                                                    {validation.touched.priority && validation.errors.priority ? (
                                                        <FormFeedback type="invalid">{validation.errors.priority}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Used with other</Label>
                                                    <Input
                                                        name="other"
                                                        type="text"
                                                        placeholder="Enter Other"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.other || ""}
                                                        invalid={
                                                            validation.touched.other && validation.errors.other ? true : false
                                                        }
                                                    />
                                                    {validation.touched.other && validation.errors.other ? (
                                                        <FormFeedback type="invalid">{validation.errors.other}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>


                                        <Modal.Footer style={{ marginTop: "20" }}>
                                            <Button onClick={handleClose} className="add-menu-new-close">
                                                Close
                                            </Button>
                                            <Button type="submit" className="add-menu-new-button">
                                                Save Changes
                                            </Button>

                                        </Modal.Footer>
                                    </Form>

                                </Modal.Body>
                            </Modal >
                            {/* End model card  */}
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}



export default PromotioneZone;