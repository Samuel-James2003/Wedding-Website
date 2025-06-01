import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { AppPaths } from "../utils/AppPaths";
const Registry: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${AppPaths.imageUrl("./images/site-bg.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
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
            <Box
              component="form"
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
              sx={{ display: "inline-block", mt: 2 }}
            >
              <input type="hidden" name="business" value="S8DJWMG342CKG" />
              <input type="hidden" name="no_recurring" value="1" />
              <input type="hidden" name="currency_code" value="USD" />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ m: 1 }}
              >
                Donate with PayPal
              </Button>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              href="https://venmo.com/?txn=pay&audience=public&recipients=Samuel-James-2003&note=Honeymoon%20donation"
              target="_blank"
              sx={{ m: 1 }}
            >
              Venmo
            </Button>
            <Button
              variant="contained"
              color="success"
              href="https://cash.app/$SamuelJames2003"
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
