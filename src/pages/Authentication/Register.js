import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
// import logoImg from "../../assets/images/logo.svg";
import logoImg from "../../assets/foodImages/signup/mainLogoIcon.png";
import "../../pages/Authentication/register.scss";

//config
import { API } from "../../newDashboard/config/API";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = props => {


  const notify = () => toast.success("Sign Up Successfully!");
  const emptyData = () => toast.warn("Please fill out all the fields");
  const emailExits = () => toast.error("User with this Email already exists!");


  //meta title
  document.title = "Register | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {

      firstName: '',
      lastName: '',
      email: '',
      password: '',
      ConfirmPassword: '',
      phoneNumber: '',
      countryCode: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim("no spaces allowed")
        .matches(
          /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
          'Invalid email format'
        )
        .required('Email is a required field')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must contain @ and .com'),

      firstName: Yup
        .string()
        .matches(/^[A-Za-z]+$/, 'Username must contain only alphabetic characters')
        .required('First Name is required'),

      lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'Username must contain only alphabetic characters')
        .required('Last name is required'),

      password: Yup.string()
        .required('Password is a required field')
        .matches(/^[A-Z]@(\d{8})$/,
          'Invalid password format'),       //A@1234567 // B@9876543 //  X@0000000

      ConfirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'), // Validate if ConfirmPassword matches the value of password


      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Phone number must be numeric and have a length between 10 and 15 characters')
        .required('Phone number is a required field'),

      countryCode: Yup.string().required("Please Enter Your countryCode"),

    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch(registerUser(values));
      try {
        const response = await axios.post(
          "http://localhost:8080/api/merchant/auth/register",
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            phoneNumber: values.phoneNumber,
            countryCode: values.countryCode,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.status === 200) {
          localStorage.setItem("SignupToken", response.data.token);
          notify(); // Call the notify function here
          console.log(notify, "==========>notify");
          navigate('/login');
          console.log("success");
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

    <React.Fragment>
      <ToastContainer />

      <div className="home-btn d-none d-sm-block">
        {/* <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link> */}
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row className="register-background" >
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p className="get-content">Get your free Skote account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >

                      <div className="mb-3">
                        <Label className="form-label">Firstname</Label>
                        <Input
                          name="firstName"
                          type="text"
                          placeholder="Enter firstName"
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

                      <div className="mb-3">
                        <Label className="form-label">lastName</Label>
                        <Input
                          name="lastName"
                          type="text"
                          placeholder="Enter lastName"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.lastName || ""}
                          invalid={
                            validation.touched.lastName && validation.errors.lastName ? true : false
                          }
                        />
                        {validation.touched.lastName && validation.errors.lastName ? (
                          <FormFeedback type="invalid">{validation.errors.lastName}</FormFeedback>
                        ) : null}
                      </div>

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

                      <div className="mb-3">
                        <Label className="form-label">Confirm Password</Label>
                        <Input
                          name="ConfirmPassword"
                          type="ConfirmPassword"
                          placeholder="Enter Confirm Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.ConfirmPassword || ""}
                          invalid={
                            validation.touched.ConfirmPassword && validation.errors.ConfirmPassword ? true : false
                          }
                        />
                        {validation.touched.ConfirmPassword && validation.errors.ConfirmPassword ? (
                          <FormFeedback type="invalid">{validation.errors.ConfirmPassword}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">phoneNumber</Label>
                        <Input
                          name="phoneNumber"
                          type="text"
                          placeholder="Enter phoneNumber"
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

                      <div className="mb-3">
                        <Label className="form-label">countryCode</Label>
                        <Input
                          name="countryCode"
                          type="text"
                          placeholder="Enter countryCode"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.countryCode || ""}
                          invalid={
                            validation.touched.countryCode && validation.errors.countryCode ? true : false
                          }
                        />
                        {validation.touched.countryCode && validation.errors.countryCode ? (
                          <FormFeedback type="invalid">{validation.errors.countryCode}</FormFeedback>
                        ) : null}
                      </div>


                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Register
                        </button>
                        <ToastContainer />
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Skote{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary" >
                    Login
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
