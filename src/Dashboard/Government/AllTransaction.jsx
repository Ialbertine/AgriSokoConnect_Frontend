import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, TextField } from "@mui/material";
import { format, parseISO } from "date-fns";

function AllTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter((transaction) =>
        transaction.user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, transactions]);

  const fetchTransactions = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/transaction/allTransaction",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setTransactions(data.transactions);
      setFilteredTransactions(data.transactions);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Unauthorized access. Please log in again.");
      } else {
        setError("Error fetching transactions. Please try again later.");
      }
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupByMonth = (transactions) => {
    return transactions.reduce((acc, transaction) => {
      const month = format(parseISO(transaction.date), "MMMM yyyy");
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(transaction);
      return acc;
    }, {});
  };

  const transactionsByMonth = groupByMonth(filteredTransactions);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userFullName", headerName: "User", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "amount", headerName: "Amount", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
  ];

  const generateRows = (transactions) => {
    return transactions.map((transaction, index) => ({
      id: `00${index + 1}`,
      userFullName: transaction.user.fullName,
      type: transaction.type,
      amount: transaction.amount,
      date: new Date(transaction.date).toLocaleDateString(),
    }));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="start" style={{ height: "80vh", marginLeft: "90px" }}>
      <h1 className="flex justify-center" style={{ textAlign: "center",  marginTop: "40px", color: "green", fontSize: "30px", fontFamily: "sans-serif", fontWeight: "bold" }}>
        All Transactions
      </h1>
      <p className="mt-8 w-[110vh]">
      This is a record of all transactions made within the system. 
      Each transaction is detailed with the user involved, the type of transaction, the amount, 
      and the date it occurred. 
      </p>
      
      <TextField 
        label="Search user..."
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginTop: "20px", marginBottom: "10px", width: "30%" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="400px">
          <CircularProgress />
        </Box>
      ) : (
        Object.keys(transactionsByMonth).map((month) => (
          <Box key={month} style={{ width: "80%", marginBottom: "40px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "green", fontSize: "24px", fontFamily: "sans-serif", fontWeight: "bold" }}>
              Transactions for {month}
            </h2>
            <DataGrid
              rows={generateRows(transactionsByMonth[month])}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              style={{ height: 400 }}
            />
          </Box>
        ))
      )}
    </Box>
  );
}

export default AllTransaction;
