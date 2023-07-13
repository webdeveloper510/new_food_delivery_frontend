import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

//config
import { API } from "../../newDashboard/config/API";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableLists = () => {
    const [data, setData] = useState([]);

    //localstorage
    const SignupToken = localStorage.getItem("SignupToken");
    const CustomerToken = localStorage.getItem("CustomerToken");
    console.log(CustomerToken, "=========>CustomerToken")

    localStorage.setItem(
        "CustomerToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im93bmVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoib3duZXJAMTIzIiwiaWF0IjoxNjg2OTA5MzIzfQ.DRXwgoOmQ3iXtFt6ybiKktkibpPuei518Z1lmwcPWbw"
    );

    useEffect(() => {
        // Retrieve the token from local storage
        const storedToken = localStorage.getItem("CustomerToken");
        // Use the storedToken value as needed in your component logic

        // Example: Log the token to the console
        console.log(storedToken);

        // Make sure to add "storedToken" to the dependency array
    }, []);

    /********** Start--Switch ***************** */
    // Our States
    const [state, setState] = React.useState({ status: true });

    // Change State Function
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    /********** End--Switch ***************** */


   /**************************************************************************
   * ************** Start  Recipient List ************************************
   * ***********************************************************************/

    const notify = () => toast.success("Login Successfully!");
    // const emptyData = () => toast.warn("Please fill out all the fields");
    const emailExits = () => toast.error("User with this Email already exists!");

    useEffect(() => {
        axios.get(API.BASE_URL + 'owner/customer', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im93bmVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoib3duZXJAMTIzIiwiaWF0IjoxNjg2OTA5MzIzfQ.DRXwgoOmQ3iXtFt6ybiKktkibpPuei518Z1lmwcPWbw',
            }
        })
            .then(function (response) {
                console.log("Recipients APIIIII", response.data);
                setData(response.data.listCustomer);
                console.log(data, "====>data")
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response);

            })

    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    console.log(data, " nnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")


    return (
        <>
            <Table striped bordered hover className="required-menu-table">
                <thead className="order-history">
                    <tr>
                        <th>SR No</th>
                        <th>FIRST NAME </th>
                        <th>LAST NAME</th>
                        <th>CONTACT NUMBER</th>
                        <th>COUNTRY CODE</th>
                        <th>EMAIL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((res, index) => {
                            console.log(res, "itemnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
                            return (
                                <tr >
                                    <td>
                                        <h5 className="mb-0">{index + 1}</h5>
                                    </td>
                                    <td>
                                        <p className="item-name">
                                            {res.firstName}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="item-name-shop">{res.lastName}</p>
                                    </td>
                                    <td>
                                        <p className="total-shop-prize">
                                            {res.phoneNumber}
                                        </p>

                                    </td>
                                    <td>
                                        <p className="total-shop-prize">
                                            {res.countryCode}
                                        </p>

                                    </td>
                                    <td>
                                        <p className="total-shop-prize">
                                            {res.email}
                                        </p>

                                    </td>


                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basicAcntion" className="action-content">
                                                <BsThreeDots className="action-shop-table" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )
                        })}

                </tbody>
            </Table>
        </>
    )
}

export default TableLists;