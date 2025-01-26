import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";

const LoanCalculator = ({ setLoanDetails }) => {
  const [category, setCategory] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCalculate = async () => {
    // Clear previous error and success messages
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "••••••"); // Replace with actual token

      const requestBody = JSON.stringify({
        userId: "6795720941776a95e30ad33b", // Replace with the actual userId
        category,
        subcategory: "General", // Adjust or make dynamic if needed
        amount: 500000, // Adjust logic if needed
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: requestBody,
        redirect: "follow",
      };

      const response = await fetch("http://192.168.159.92:5000/api/user/loan", requestOptions);

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      setLoanDetails({
        loanAmount: result.loanAmount,
        monthlyInstallment: result.monthlyInstallment,
      });

      setSuccess("Loan details calculated successfully!");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to calculate loan. Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Loan Calculator
      </Typography>

      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="success" variant="body2" sx={{ mb: 2 }}>
          {success}
        </Typography>
      )}

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="loan-category-label">Choose Loan Category</InputLabel>
        <Select
          labelId="loan-category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Wedding">Wedding Loans</MenuItem>
          <MenuItem value="Home">Home Construction Loans</MenuItem>
          <MenuItem value="Business">Business Startup Loans</MenuItem>
          <MenuItem value="Education">Education Loans</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Initial Deposit (PKR)"
        type="number"
        fullWidth
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        sx={{ mb: 3 }}
      />

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="loan-period-label">Loan Period (in years)</InputLabel>
        <Select
          labelId="loan-period-label"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
        >
          <MenuItem value={1}>1 Year</MenuItem>
          <MenuItem value={3}>3 Years</MenuItem>
          <MenuItem value={5}>5 Years</MenuItem>
          <MenuItem value={4}>4 Years</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCalculate}
        disabled={loading}
        sx={{ position: "relative" }}
      >
        {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Calculate"}
      </Button>
    </Box>
  );
};

export default LoanCalculator;
