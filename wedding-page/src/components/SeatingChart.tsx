import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import { AppPaths } from "../utils/AppPaths";

const SeatingChart: React.FC = () => {
  const seatingData = [
    {
      table: "Table 1",
      guests: [
        ["Jose", "Scott", "Raymond", "Elaine"],
        ["Marco", "Sarah", "Felecia", "Jason", "Tom"],
      ],
    },
    {
      table: "Table 2",
      guests: [
        ["Isabelle", "Doug", "Chrissie", "Mateo"],
        ["Karsyn", "Jeff", "Ben", "Arionna", "Austin"],
      ],
    },
    {
      table: "Table 3",
      guests: [
        ["Samuel", "David M", "Josh"],
        ["Joe", "Josh", "Antonio"],
      ],
    },
    {
      table: "Table 4",
      guests: [
        ["Dorothy", "David A", "Florence", "Claire"],
        ["Benedicte", "Juli", "Joe", "Jane"],
      ],
    },
    {
      table: "Table 5",
      guests: [
        ["Bob", "Felecia", "Serena", "Nate"],
        ["Brian", "Angelina", "Enzo"],
      ],
    },
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
              <Box key={tableInfo.table} my={1} width="100%">
                {idx > 0 && <Divider />}
                <Typography variant="h5" mt={idx > 0 ? 2 : 0} align="center">
                  {tableInfo.table}
                </Typography>
                <Grid container rowSpacing={2} columnSpacing={4}>
                    {tableInfo.guests.map((column, colIdx) => (
                      <Grid key={colIdx} size={6}>
                        <List dense>
                          {column.map((guest) => (
                            <ListItem
                              key={guest}
                              sx={{ justifyContent: "center" }}
                            >
                              <ListItemText
                                primary={guest}
                                sx={{ textAlign: "center", typography: "h1" }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    ))}
                  </Grid>
              </Box>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default SeatingChart;
