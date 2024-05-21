import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AllOrder = () => {
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
      Date: new Date().toISOString().split("T")[0],
      status: "pending",
      price: 10, // example price
    },
    {
      id: 2,
      productName: "Mango",
      quantity: 3,
      quality: "Fresh",
      phoneNumber: "+250738992211",
      shippingAddress: "Kigali City Tower, KN 2 St.",
      Date: new Date().toISOString().split("T")[0],
      status: "delivered",
      price: 15,
    },
    {
      id: 3,
      productName: "ibirayi",
      quantity: 3,
      quality: "kinigi",
      phoneNumber: "+250738992211",
      shippingAddress: "Kigali City Tower, KN 2 St.",
      Date: new Date().toISOString().split("T")[0],
      status: "pending",
      price: 20,
    },
  ]);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState(null);

  // Function to handle the search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle the delete for the order
  const handleDelete = (id) => {
    // setOrders(orders.filter((order) => order.id !== id));
  };

  // Function to handle the edit of the order
  const handleEdit = (id) => {
    setEditingOrderId(id);
    const orderToEdit = orders.find((order) => order.id === id);
    setEditedOrder(orderToEdit);
  };

  // Function to handle editing of order data
  const handleEditOrderData = (field, value) => {
    setEditedOrder({
      ...editedOrder,
      [field]: value,
    });
  };

  // Function to handle viewing the order details
//   const handleView = (id) => {
//     // Navigate to the view page for the order with the specified id
//     console.log(`View order with id ${id}`);
//   };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "productName", headerName: "Product Name", width: 100 },
    { field: "quantity", headerName: "Quantity", width: 90 },
    { field: "quality", headerName: "Quality", width: 100 },
    { field: "phoneNumber", headerName: "Phone Number", width: 110 },
    { field: "shippingAddress", headerName: "Shipping Address", width: 150 },
    { field: "Date", headerName: "Date", width: 110 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 120 },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => handleView(params.row.id)}>
            <VisibilityIcon color="primary" />
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
    <div
      style={{
        height: 400,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        paddingLeft: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
          style={{ width: 300 }}
        />
        <Link to="/create" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{ padding: 15, background: "#006400" }}
          >
            Add order
          </Button>
        </Link>
      </div>
      <DataGrid
        rows={filteredOrders
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((order) =>
            order.id === editingOrderId ? { ...order, ...editedOrder } : order
          )}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onPageSizeChange={handleRowsPerPageChange}
        rowCount={filteredOrders.length}
        onPageChange={handlePageChange}
        paginationMode="server"
      />
    </div>
  );
};

export default AllOrder;
