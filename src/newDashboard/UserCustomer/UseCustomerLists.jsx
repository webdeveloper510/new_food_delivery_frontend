import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { FiPlus } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TableLists from "../UserCustomer/TableLists";

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


const UseCustomerLists = () => {


    /***********Model card*********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {

            fullName: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: '',
            zone: "",
            role: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Full Name is required'),

            email: Yup.string()
                .trim("no spaces allowed")
                .matches(
                    /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
                    'Invalid email format'
                )
                .required('Email is a required field')
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must contain @ and .com'),

            password: Yup.string()
                .required('Password is a required field'),
            // .matches(/^[A-Z]@(\d{8})$/,
            //   'Invalid password format'),       //A@1234567 // B@9876543 //  X@0000000

            phoneNumber: Yup.string()
                .matches(/^[0-9]{10,15}$/, 'Phone number must be numeric and have a length between 10 and 15 characters')
                .required('Contact Number is a required field'),

            address: Yup.string().required("Please Enter Your Address"),
            zone: Yup.string().required("Please Enter Your Zone"),
            role: Yup.string().required("Please Enter Your Role"),

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
                        <Breadcrumbs title="Management" breadcrumbItem="User Lists" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <button className="rol-add" onClick={handleShow}>
                                            <FiPlus className="plus-icons" /> Add New
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    < TableLists />
                                </div>
                            </div>
                            {/* <!-- ======= End---main section ======= --> */}

                            {/* Start model card  */}
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Staff</Modal.Title>
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
                                        <p className="staff-Details">Details</p>

                                        <div className="row" style={{ marginTop: "20px" }}>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Full Name</Label>
                                                    <Input
                                                        name="fullName"
                                                        type="text"
                                                        placeholder="Enter fullName"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.fullName || ""}
                                                        invalid={
                                                            validation.touched.fullName && validation.errors.fullName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.fullName && validation.errors.fullName ? (
                                                        <FormFeedback type="invalid">{validation.errors.fullName}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Email</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Contact Number</Label>
                                                    <Input
                                                        name="phoneNumber"
                                                        type="text"
                                                        placeholder="Contact Number"
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
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Password</Label>
                                                    <Input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.password || ""}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <Label className="form-label">Address</Label>
                                                    <Input
                                                        name="address"
                                                        type="text"
                                                        placeholder="Enter Address"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.address || ""}
                                                        invalid={
                                                            validation.touched.address && validation.errors.address ? true : false
                                                        }
                                                    />
                                                    {validation.touched.address && validation.errors.address ? (
                                                        <FormFeedback type="invalid">{validation.errors.address}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Select Zone</Label>
                                                    <select
                                                        className="form-select form-select-md"
                                                        aria-label=".form-select-md example"
                                                        name="zone" // Add the name attribute
                                                        value={validation.values.zone} // Bind the value to the formik values
                                                        onChange={validation.handleChange} // Bind the change event handler
                                                        onBlur={validation.handleBlur} // Bind the blur event handler
                                                    >
                                                        <option value="" selected>
                                                            Choose zone
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    {validation.touched.zone && validation.errors.zone ? (
                                                        <FormFeedback type="invalid">{validation.errors.zone}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Select Role</Label>
                                                    <select
                                                        className="form-select form-select-md"
                                                        aria-label=".form-select-md example"
                                                        name="role" // Add the name attribute
                                                        value={validation.values.role} // Bind the value to the formik values
                                                        onChange={validation.handleChange} // Bind the change event handler
                                                        onBlur={validation.handleBlur} // Bind the blur event handler
                                                    >
                                                        <option value="" selected>
                                                            Choose Role
                                                        </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    {validation.touched.role && validation.errors.role ? (
                                                        <FormFeedback type="invalid">{validation.errors.role}</FormFeedback>
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



export default UseCustomerLists;