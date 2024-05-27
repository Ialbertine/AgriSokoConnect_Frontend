import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, TextField, IconButton, Button, Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import axios from "axios";

const AllOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

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
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched Orders:", response.data);
      setOrderData(response.data.data || []);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch stock data");
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
        prevOrders.filter((order) => order._id !== id)
      );
    } catch (error) {
      console.error("Error deleting order:", error);
      setError(error.message);
    }
  };

  const handleEdit = (id) => {
    setEditingOrderId(id);
    const order = orderData.find((order) => order._id === id);
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
          order._id === editingOrderId ? updatedOrder : order
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

  const filteredOrders = Array.isArray(orderData)
    ? orderData.filter(
        (order) =>
          order.customer &&
          order.customer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div
      style={{
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
      <Grid container spacing={2}>
        {filteredOrders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order._id}>
            <Card>
              <CardContent>
                {order.selectedStockItems &&
                  order.selectedStockItems.map((item, index) => (
                    <div key={index}>
                      <Typography variant="h6">
                        Product Name: {item.NameOfProduct}
                      </Typography>
                      <Typography variant="h6">
                        Quality of Product: {item.typeOfProduct}
                      </Typography>
                      <Typography variant="body1">
                        Quantity: {item.quantity} Ton
                      </Typography>
                    </div>
                  ))}
                <Typography variant="body1">
                  Phone Number: {order.phoneNumber}
                </Typography>
                <Typography variant="body1">
                  Shipping Address: {order.shippingAddress}
                </Typography>
                <Typography variant="body1">
                  Total Amount: {order.totalAmount}
                </Typography>
                <Typography variant="body1">Status: {order.status}</Typography>
                <Typography variant="body2">
                  Created At: {new Date(order.createdAt).toLocaleString()}
                </Typography>
                <div>
                  <IconButton onClick={() => handleDelete(order._id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(order._id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <Link to="/dashboard/buyer/view">
                  <IconButton>
                    <VisibilityIcon color="primary" />
                  </IconButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {editingOrderId && (
        <div style={{ marginTop: 16 }}>
          <h3 className="text-2xl mb-3 font-medium text-green-600">
            Edit Order
          </h3>
          <TextField
            label="Total Items"
            variant="outlined"
            value={editedOrder.totalItems || ""}
            onChange={(e) => handleEditOrderData("totalItems", e.target.value)}
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={editedOrder.phoneNumber || ""}
            onChange={(e) => handleEditOrderData("phoneNumber", e.target.value)}
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <TextField
            label="Shipping Address"
            variant="outlined"
            value={editedOrder.shippingAddress || ""}
            onChange={(e) =>
              handleEditOrderData("shippingAddress", e.target.value)
            }
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <TextField
            label="Status"
            variant="outlined"
            value={editedOrder.status || ""}
            onChange={(e) => handleEditOrderData("status", e.target.value)}
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <TextField
            label="Total Amount"
            variant="outlined"
            value={editedOrder.totalAmount || ""}
            onChange={(e) => handleEditOrderData("totalAmount", e.target.value)}
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, marginTop: 18, backgroundColor: "green" }}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllOrder;
