import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const AddStaff = () => {




    return (
        <>
            {/* <Form className="needs-validation"
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
                    <Col md="12">
                        <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom01">Category Images</Label>
                            <Input
                                name="itemImages"
                                placeholder="Phone Number"
                                type="file"
                                className="form-control"
                                id="validationCustom01"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.itemImages || ""}
                                invalid={
                                    validation.touched.itemImages && validation.errors.itemImages ? true : false
                                }
                            />
                            {validation.touched.itemImages && validation.errors.itemImages ? (
                                <FormFeedback type="invalid">{validation.errors.itemImages}</FormFeedback>
                            ) : null}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup className="mb-3">
                            <Label htmlFor="validationCustom01">Category Description</Label>
                            <textarea
                                name="categoryDescription"
                                rows="3"
                                placeholder="Category Description"
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.categoryDescription || ""}
                                invalid={
                                    validation.touched.categoryDescription && validation.errors.categoryDescription ? true : false
                                }
                            />
                            {validation.touched.categoryDescription && validation.errors.categoryDescription ? (
                                <FormFeedback type="invalid">{validation.errors.categoryDescription}</FormFeedback>
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
            </Form> */}
        </>
    )
}

export default AddStaff;