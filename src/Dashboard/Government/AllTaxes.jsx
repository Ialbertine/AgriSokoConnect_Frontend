import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { format, parseISO } from "date-fns";

function AllTaxes() {
  const [taxes, setTaxes] = useState([]);
  const [filteredTaxes, setFilteredTaxes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTaxes();
  }, []);

  useEffect(() => {
    setFilteredTaxes(
      taxes.filter((tax) =>
        tax.user?.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, taxes]);

  const fetchTaxes = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/transaction/allTaxes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setTaxes(data.taxes);
      setFilteredTaxes(data.taxes);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized access. Please log in again.");
      } else {
        setError("Error fetching taxes. Please try again later.");
      }
      console.error("Error fetching taxes:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupByMonth = (taxes) => {
    return taxes.reduce((acc, tax) => {
      const month = format(parseISO(tax.date), "MMMM yyyy");
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(tax);
      return acc;
    }, {});
  };

  const taxesByMonth = groupByMonth(filteredTaxes);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "userFullName", headerName: "User", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  const generateRows = (taxes) => {
    return taxes.map((tax, index) => ({
      id: `00${index + 1}`,
      userFullName: tax.user ? tax.user.fullName : "Unknown",
      type: tax.type,
      amount: tax.amount,
      date: new Date(tax.date).toLocaleDateString(),
    }));
  };

  return (
    <div className="mt-[3rem]">
      <div className="ml-28 pb-10">
        <Typography
          variant="h4"
          align="start"
          color="green"
          fontWeight="bold"
          fontFamily={"sans-serif"}
          gutterBottom
        >
          Tax Transactions
        </Typography>
        <p>
          This section outlines the tax expectations based on the total amount of
          each farmer's transactions on a monthly basis.
        </p>
      </div>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          width: "80%",
          margin: "auto",
        }}
      >

        <TextField
          label="Search user..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: "20px", width: "30%" }}
        />

        {error && <Typography style={{ color: "red" }}>{error}</Typography>}
        {loading ? (
          <Box
            display="flex"
            justifyContent="start"
            height="400px"
          >
            <CircularProgress />
          </Box>
        ) : (
          Object.keys(taxesByMonth).map((month) => (
            <Box key={month} style={{ width: "100%", marginBottom: "40px" }}>
              <Typography
                variant="h5"
                color="green"
                fontWeight="bold"
                fontFamily={"sans-serif"}
                gutterBottom
              >
                Transactions for {month}
              </Typography>
              <DataGrid
                rows={generateRows(taxesByMonth[month])}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                style={{ height: 400, width: "100%" }}
              />
            </Box>
          ))
        )}
      </Paper>
    </div>
  );
}

export default AllTaxes;
