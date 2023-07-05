import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { FiPlus } from "react-icons/fi";
import "../Roles/roles.scss";
import RolesLists from "./RolesLists";

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


const Roles = () => {

    /***********Model card*********** */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Form validation 
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            roleName: '',
            Permission: '',
        },
        validationSchema: Yup.object({
            roleName: Yup.string().required("Please Enter Your Role Name"),
            Permission: Yup.string().required("Please Enter Your Permission"),
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
                        <Breadcrumbs title="Management" breadcrumbItem="Roles" />
                        <Row>
                            {/* <!-- ======= Start---main section ======= --> */}
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <p className="roles-heading">Roles</p> */}
                                </div>

                                <div className="col-md-6">
                                    <div style={{ float: "right" }}>
                                        <div className="rol-add" onClick={handleShow}>
                                            <FiPlus className="plus-icons" /> Add New
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="card order-history">
                                    <RolesLists />
                                </div>
                            </div>
                            {/* <!-- ======= End---main section ======= --> */}

                            {/* model card  */}
                            <Modal show={show} onHide={handleClose} className="rule-model">
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Roles</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className="needs-validation"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                    >
                                    
                                        <Row style={{ marginTop: "20px" }}>
                                            <Col md="12">
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="validationCustom01">Role Name</Label>
                                                    <Input
                                                        name="roleName"
                                                        placeholder="Enter Role Name"
                                                        type="text"
                                                        className="form-control"
                                                        id="validationCustom01"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.roleName || ""}
                                                        invalid={
                                                            validation.touched.roleName && validation.errors.roleName ? true : false
                                                        }
                                                    />
                                                    {validation.touched.roleName && validation.errors.roleName ? (
                                                        <FormFeedback type="invalid">{validation.errors.roleName}</FormFeedback>
                                                    ) : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup className="mb-3">
                                                    <Label htmlFor="validationCustom01">PERMISSION Details</Label>
                                                    <textarea
                                                        name="Permission"
                                                        rows="3"
                                                        placeholder="Enter Details"
                                                        type="text"
                                                        className="form-control"
                                                        id="validationCustom01"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.Permission || ""}
                                                        invalid={
                                                            validation.touched.Permission && validation.errors.Permission ? true : false
                                                        }
                                                    />
                                                    {validation.touched.Permission && validation.errors.Permission ? (
                                                        <FormFeedback type="invalid">{validation.errors.Permission}</FormFeedback>
                                                    ) : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>

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

                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        </>
    )
}



export default Roles;