// /src/components/LoanCategory.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const LoanCategory = () => {
  const categories = [
    { name: "Wedding Loans", path: "/calculator" },
    { name: "Home Construction Loans", path: "/calculator" },
    { name: "Business Startup Loans", path: "/calculator" },
    { name: "Education Loans", path: "/calculator" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 4,
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#0d47a1" }}
      >
        Choose a Loan Category
      </Typography>

      <Grid container spacing={4} sx={{ mt: 3, maxWidth: 800 }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 6,
                backgroundColor: "#ffffff",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: "#0d47a1", fontWeight: "bold" }}
                >
                  {category.name}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  component={Link}
                  to={category.path}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1,
                    fontSize: "1rem",
                    backgroundColor: "#0d47a1",
                    color: "#fff",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#08306b",
                    },
                  }}
                >
                  Select
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LoanCategory;
