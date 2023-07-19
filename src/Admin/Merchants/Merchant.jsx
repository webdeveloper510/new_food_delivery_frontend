import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { FiPlus } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MerchantLists from "./MerchantLists";
import { useDispatch, useSelector } from "react-redux";
import { hideAddMenuCard, showAddMenuCard } from "store/menu/actions";

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
//config
import { API } from "../../newDashboard/config/API";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { preventDefault } from "@fullcalendar/core";
import { useNavigate } from "react-router-dom";


const Merchant = () => {
    const loginToken = localStorage.getItem("loginToken");
    //  console.log(loginToken, "=========>loginToken")

    /***********Model card*********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /**********Image form data pass **********/
   
    // const uploadFile = (event) => {
    //     if (event.target.files.length > 0) {
    //         const file = event.target.files[0];
    //         console.log("fff", file)
    //         validation.setFieldValue("image", file.name)
    //     }
    // }

    /*****************Store Data******** */

    const dispatch = useDispatch();

    const { card } = useSelector(state => ({
        card: state.showCardReducer.card
    }));
    console.log(card, "card======>");

    const handleShowCard = () => {
        console.log('handleShowCard----call')
        dispatch(showAddMenuCard());

    };

    const handleCloseCard = () => {
        console.log('handleShowCard----call')
        dispatch(hideAddMenuCard());

    };




  const notify = () => toast.success("Data Added Successfully!");
  const emptyData = () => toast.warn("Please fill out all the fields");
  const emailExits = () => toast.error("User with this Email already exists!");
  const navigate = useNavigate();

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            image: "",
            firstName: '',
            LastName: '',
            email: '',
            phoneNumber: '',
            countyCode: '',
        },
        validationSchema: Yup.object({
            image: Yup.string()
                .required('Image is required'),
            firstName: Yup.string().required("Please Enter First Name"),
            LastName: Yup.string().required("Please Enter Last Name"),
            email: Yup.string()
                .trim("no spaces allowed")
                .matches(
                    /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
                    'Invalid email format'
                )
                .required('Email is a required field')
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must contain @ and .com'),

            phoneNumber: Yup.string()
                .matches(/^[0-9]{10,15}$/, 'Phone number must be numeric and have a length between 10 and 15 characters')
                .required('Contact Number is a required field'),

            countyCode: Yup.string().required("Please Enter County Code"),

        }),
        onSubmit: async (values, { resetForm }) => {

            // dispatch(registerUser(values));
            console.log('jiiiiii', values)
            const formData = new FormData();
            formData.append('image', values.image);
            formData.append('firstName', values.firstName);
            formData.append('lastName', values.LastName);
            formData.append('email', values.email);
            formData.append('phoneNumber', values.phoneNumber);
            formData.append('countryCode', values.countyCode);


            try {
                const response = await axios.post(
                    API.BASE_URL + 'admin/merchant',
                    formData,
                    {
                        headers: {
                            'x-access-token': loginToken,
                        },
                    }
                );

                if (response.data.status === 200) {
                    // console.log(response.data, "response");
                    notify(); // Call the notify function here
                    resetForm();
                    // navigate('/admin/merchant');
                    handleCloseCard();
                   
                } else if (response.data.status === 400) {
                    toast.error(response.data.error);
                    console.log("Error");
                }
            } catch (error) {
                console.log(error, '============>Error');
                if (error.response && error.response.data && error.response.data.status === 400) {
                    toast.error(error.response.data.code);
                } else {
                    toast.error("An error occurred/server. Please try again later.");
                }
            }
        }

    });


    return (
        <>
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Merchant" breadcrumbItem="Merchant Lists" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}

                            <div className="row">
                                <div className="col-md-6">
                                </div>
                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <button className="rol-add" onClick={handleShowCard}>
                                            <FiPlus className="plus-icons" /> Add New
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    < MerchantLists />
                                </div>
                            </div>
                            {/* <!-- ======= End---main section ======= --> */}

                            {/* Start model card  */}
                            <Modal show={card} onHide={handleCloseCard}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Merchant</Modal.Title>
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

                                            {/* <input
                                                type="file"
                                                id="file"
                                                className="form-control"
                                                name="file"
                                                onChange={uploadFile}
                                            /> */}
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Image</Label>
                                                    <input
                                                        name="image"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(event) => {
                                                            validation.setFieldValue('image', event.currentTarget.files[0]);
                                                        }}
                                                        onBlur={validation.handleBlur}
                                                        invalid={validation.touched.image && !!validation.errors.image}
                                                    />
                                                    {validation.touched.image && validation.errors.image && (
                                                        <FormFeedback type="invalid">{validation.errors.image}</FormFeedback>
                                                    )}

                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">First Name</Label>
                                                    <Input
                                                        name="firstName"
                                                        type="text"
                                                        placeholder="Enter first Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.firstName || ""}
                                                        invalid={
                                                            validation.touched.firstName && validation.errors.firstName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.firstName && validation.errors.firstName ? (
                                                        <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Last Name</Label>
                                                    <Input
                                                        name="LastName"
                                                        type="text"
                                                        placeholder="Enter Last Name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.LastName || ""}
                                                        invalid={
                                                            validation.touched.LastName && validation.errors.LastName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.LastName && validation.errors.LastName ? (
                                                        <FormFeedback type="invalid">{validation.errors.LastName}</FormFeedback>
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
                                                    <Label className="form-label">County Code</Label>
                                                    <Input
                                                        name="countyCode"
                                                        type="text"
                                                        placeholder="Please Enter county Code"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.countyCode || ""}
                                                        invalid={
                                                            validation.touched.countyCode && validation.errors.countyCode ? true : false
                                                        }
                                                    />
                                                    {validation.touched.countyCode && validation.errors.countyCode ? (
                                                        <FormFeedback type="invalid">{validation.errors.countyCode}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>


                                        <Modal.Footer style={{ marginTop: "20" }}>
                                            <Button onClick={handleCloseCard} className="add-menu-new-close">
                                                Close
                                            </Button>
                                            <Button type="submit" className="add-menu-new-button">
                                                Save Changes
                                            </Button>
                                            <ToastContainer />

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



export default Merchant;