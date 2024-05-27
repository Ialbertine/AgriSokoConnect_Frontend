import React, { useState, useEffect } from "react";
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
  const [orders, setOrders] = useState([]);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []); // Fetch orders on component mount

  const fetchOrders = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      setError("No token found");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();
      console.log("Fetched Orders:", data);
      setOrderData(data.data);
    } catch (error) {
      console.error("Fetch Orders Error:", error);
      setError("Failed to fetch orders");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete order");
      }
      setOrderData((prevOrders) =>
        prevOrders.filter((order) => order.id !== id)
      );
    } catch (error) {
      console.error("Error deleting order:", error);
      setError(error.message);
    }
  };

  const handleEdit = (id) => {
    setEditingOrderId(id);
    const order = orderData.find((order) => order.id === id);
    setEditedOrder(order);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/update/${editingOrderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedOrder),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update order");
      }
      const updatedOrder = await response.json();
      setOrderData((prevOrders) =>
        prevOrders.map((order) =>
          order.id === editingOrderId ? updatedOrder : order
        )
      );
      setEditingOrderId(null);
      setEditedOrder({});
    } catch (error) {
      console.error("Error updating order:", error);
      setError(error.message);
    }
  };

  const handleEditOrderData = (field, value) => {
    setEditedOrder((prevEditedOrder) => ({
      ...prevEditedOrder,
      [field]: value,
    }));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          <IconButton>
            <VisibilityIcon color="primary" />
          </IconButton>
        </>
      ),
    },
  ];

  const filteredOrders = orderData.filter(
    (order) =>
      order.productName &&
      searchQuery &&
      order.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
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
        onPageChange={(params) => handlePageChange(params.page)}
        paginationMode="server"
      />
      {editingOrderId && (
        <div style={{ marginTop: 16 }}>
          <TextField
            label="Product Name"
            variant="outlined"
            value={editedOrder.productName || ""}
            onChange={(e) => handleEditOrderData("productName", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            value={editedOrder.quantity || ""}
            onChange={(e) => handleEditOrderData("quantity", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Quality"
            variant="outlined"
            value={editedOrder.quality || ""}
            onChange={(e) => handleEditOrderData("quality", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={editedOrder.phoneNumber || ""}
            onChange={(e) => handleEditOrderData("phoneNumber", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Shipping Address"
            variant="outlined"
            value={editedOrder.shippingAddress || ""}
            onChange={(e) =>
              handleEditOrderData("shippingAddress", e.target.value)
            }
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Status"
            variant="outlined"
            value={editedOrder.status || ""}
            onChange={(e) => handleEditOrderData("status", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <TextField
            label="Price"
            variant="outlined"
            value={editedOrder.price || ""}
            onChange={(e) => handleEditOrderData("price", e.target.value)}
            style={{ marginRight: 16 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            style={{ padding: 10, marginTop: 10 }}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllOrder;
