import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import { AppPaths } from "../utils/AppPaths";

const SeatingChart: React.FC = () => {
  const seatingData = [
    { table: "Table 1", guests: ["Alice Johnson", "Bob Smith", "Carol Lee"] },
    {
      table: "Table 2",
      guests: ["David Chen", "Emma Martínez", "Frank Patel"],
    },
    { table: "Table 3", guests: ["Grace Kim", "Henry Ortiz", "Isabel Ruiz"] },
    {
      table: "Table 4",
      guests: ["Jack Nguyen", "Karen Adams", "Liam O’Connor"],
    },
    // …etc.
  ];

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
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Seating Chart
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {seatingData.map((tableInfo, idx) => (
              <Box key={tableInfo.table} my={3} width="100%">
              {idx > 0 && <Divider />}
              <Typography variant="h5" mt={idx > 0 ? 2 : 0} align="center">
                {tableInfo.table}
              </Typography>
              <List>
                {tableInfo.guests.map((item) => (
                  <ListItem key={item} sx={{ justifyContent: "center" }}>
                    <ListItemText primary={item} sx={{ textAlign: "center" }} />
                  </ListItem>
                ))}
              </List>
            </Box>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default SeatingChart;
