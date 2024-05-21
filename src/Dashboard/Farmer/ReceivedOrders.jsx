import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, IconButton } from "@mui/material";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { BiArrowToTop } from "react-icons/bi";

const ReceivedOrders = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [orders, setOrders] = useState([
        {
            id: 1,
            productName: "Apple (Red Delicious)",
            quantity: 5,
            quality: "Organic",
            phoneNumber: "+250788773366",
            shippingAddress: "Kigali, KN 4 Ave, 74",
        },
        {
            id: 2,
            productName: "Mango",
            quantity: 3,
            quality: "Fresh",
            phoneNumber: "+250738992211",
            shippingAddress: "Kigali City Tower, KN 2 St.",
        },
    ]);

    //    Fetching 


    // function to handle the search
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    // function to handle the delete for the order
    const handleDelete = (id) => {

    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "productName", headerName: "Product Name", width: 150 },
        { field: "quantity", headerName: "Quantity", width: 100 },
        { field: "quality", headerName: "Quality", width: 120 },
        { field: "phoneNumber", headerName: "Phone Number", width: 150 },
        { field: "shippingAddress", headerName: "Shipping Address", width: 200 },
        {
            field: "actions",
            headerName: "Actions",
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <IoMdCloseCircleOutline className="text-orange-700" />
                    </IconButton>
                </>
            ),
        },
    ];

    const DeliveredOrders = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "productName", headerName: "Product Name", width: 150 },
        { field: "quantity", headerName: "Quantity", width: 100 },
        { field: "quality", headerName: "Quality", width: 120 },
        { field: "phoneNumber", headerName: "Phone Number", width: 150 },
        { field: "shippingAddress", headerName: "Shipping Address", width: 200 },
        {
            field: "actions",
            headerName: "Status",
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <IoCheckmarkDoneOutline className="text-blue-400" />
                    </IconButton>
                </>
            ),
        },
        {
            field: "restore",
            headerName: "Restore",
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                        <BiArrowToTop className="" />
                    </IconButton>
                </>
            ),
        },
    ];

    const filteredOrders = orders.filter((order) =>
        order.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const handleRowsPerPageChange = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
    };



    return (
        <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10'>
            <div className="">
                <div className="flex flex-col gap-5">
                    <strong className='text-xl flex justify-center'>Received Orders</strong>
                    <strong className="pb-5">New orders</strong>
                </div>
                <div
                    style={{
                        height: 400,
                        width: "85%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "16 0 0 20",
                        backgroundColor: "white",
                        padding:"40px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: 16,
                            width: "60%",
                        }}
                    >
                        <TextField
                            label="Search Orders"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearch}
                            style={{ width: 700 }}
                        />
                       
                    </div>
                    <DataGrid
                        rows={filteredOrders.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )}
                        columns={columns}
                        pageSize={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onPageSizeChange={handleRowsPerPageChange}
                        rowCount={filteredOrders.length}
                        onPageChange={handlePageChange}
                        paginationMode="server" // Simulate server-side pagination (optional)
                    />
                </div>
            </div>

            {/* DELIVERED ORDER TABLE */}
            <strong className="">Completed orders</strong>
            <div className=" bg-white w-[90%]">
                
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: '100%',
                        padding:"40px",
                    }}
                >
                    <DataGrid
                        rows={filteredOrders.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )}
                        columns={DeliveredOrders}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReceivedOrders