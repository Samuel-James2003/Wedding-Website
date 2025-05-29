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
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        p: 2,
        overflow: "hidden",
        "&::before": {
          content: '""',
          backgroundImage: `url(${AppPaths.imageUrl(
            "/images/registry-bg.png"
          )})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3, // Adjust opacity to mute background
          zIndex: -1,
        },
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
              target="_top"
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
              href="https://cash.app/"
              target="_blank"
              disabled={true}
              sx={{ m: 1 }}
            >
              Cash App
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            You could also get us a gift card to our favorite stores: [Insert
            stores here]
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Registry;
