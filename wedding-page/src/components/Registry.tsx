import React from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";

const Registry: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Our Registry
          </Typography>
          <Typography variant="h6" gutterBottom>
            Please help us with our honeymoon ✈️🌴
          </Typography>

          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              href="https://www.paypal.com/yourlink"
              target="_blank"
              sx={{ m: 1 }}
            >
              PayPal
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.venmo.com/yourlink"
              target="_blank"
              sx={{ m: 1 }}
            >
              Venmo
            </Button>
            <Button
              variant="contained"
              color="success"
              href="https://cash.app/yourlink"
              target="_blank"
              sx={{ m: 1 }}
            >
              Cash App
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Registry;
