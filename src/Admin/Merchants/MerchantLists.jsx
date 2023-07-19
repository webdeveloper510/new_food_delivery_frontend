import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "../Merchants/merchants.scss";

//config
import { API } from "../../newDashboard/config/API";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MerchantLists = () => {
    //localstorage
    const loginToken = localStorage.getItem("loginToken");
    const [data, setData] = useState([]);
    const [state, setState] = useState({ status: true });
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    /**************************************************************************
    * ************** Start  Recipient List ************************************
    * ***********************************************************************/
    useEffect(() => {
        axios
            .get(API.BASE_URL + 'admin/merchant/list', {
                params: {
                    limit: 100,
                    page: 1,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': loginToken,
                },
            })
            .then(function (response) {
                setData(response.data.data);
                setFilteredData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response);
            });
    }, []);
    
    console.log(data, "=========>Data");

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = data.filter(
            (item) =>
                item.firstName.toLowerCase().includes(value) ||
                item.lastName.toLowerCase().includes(value) ||
                item.email.toLowerCase().includes(value) ||
                item.phoneNumber.toLowerCase().includes(value) ||
                item.countryCode.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page when filtering
    };

    const columns = [
        {
            dataField: 'id',
            text: 'SR No',
            sort: true,
            formatter: (cell, row, rowIndex) => <span>{(currentPage - 1) * paginationOptions.sizePerPage + rowIndex + 1}</span>,
        },
        {
            dataField: 'firstName',
            text: 'FIRST NAME',
            // filter: textFilter(),
        },
        {
            dataField: 'lastName',
            text: 'LAST NAME',
            // filter: textFilter(),
        },
        {
            dataField: 'email',
            text: 'EMAIL',
            // filter: textFilter(),
        },
        {
            dataField: 'phoneNumber',
            text: 'CONTACT NUMBER',
            // filter: textFilter(),
        },
        {
            dataField: 'countryCode',
            text: 'COUNTRY CODE',
            // filter: textFilter(),
        },
        {
            dataField: 'image',
            text: 'Image',
            formatter: (cell, row) =>
                <img className="me-3 rounded-circle media-bx d-flex align-items-center" src={cell} alt="images" />,


        },
        {
            dataField: 'action',
            text: 'Action',
            formatter: (cell, row) => (
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basicAction" className="action-content">
                        <BsThreeDots className="action-shop-table" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" >
                            <span className="delete-content">Delete</span>
                            </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ),
        },
    ];

    const paginationOptions = {
        sizePerPage: 10,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
        onPageChange: (page, sizePerPage) => setCurrentPage(page),
    };

    return (
        <>
            <div>
                <input type="text" className="Datatable-Admin" placeholder="Search..." onChange={handleSearch} />
                {filteredData.length > 0 ? (
                    <BootstrapTable
                        keyField="id"
                        data={filteredData}
                        columns={columns}
                        filter={filterFactory()}
                        pagination={paginationFactory(paginationOptions)}
                    />
                ) : (
                    <div className="no-data-found">
                        <p>No Data Found</p>
                    </div>

                )}
            </div>
        </>
    )
}

export default MerchantLists;