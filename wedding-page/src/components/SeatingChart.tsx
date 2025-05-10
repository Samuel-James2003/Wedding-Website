import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

interface Seat {
  id: number;
  pInitial: string;
  isAvailable: boolean;
}

interface Table {
  id: number;
  tableName?: string;
  seats: Seat[];
}

const tables: { [key: string]: Table } = {
  A: {
    id: 1,
    tableName: "Table A",
    seats: new Array(8).fill(null).map((_, idx) => ({
      id: idx,
      pInitial: "Place H",
      isAvailable: idx % 2 === 0,
    })),
  },
  B: {
    id: 2,
    tableName: "Table B",
    seats: new Array(4).fill(null).map((_, idx) => ({
      id: idx,
      pInitial: "Place H",
      isAvailable: idx % 2 === 0,
    })),
  },
  Wedding: {
    id: 3,
    tableName: "Wedding Party",
    seats: new Array(8).fill(null).map((_, idx) => ({
      id: idx,
      pInitial: "Place H",
      isAvailable: idx % 2 === 0,
    })),
  },
  C: {
    id: 4,
    tableName: "Table C",
    seats: new Array(8).fill(null).map((_, idx) => ({
      id: idx,
      pInitial: "Place H",
      isAvailable: idx % 2 === 0,
    })),
  },
  D: {
    id: 5,
    tableName: "Table D",
    seats: new Array(8).fill(null).map((_, idx) => ({
      id: idx,
      pInitial: "Place H",
      isAvailable: idx % 2 === 0,
    })),
  },
};

const SeatingChart: React.FC = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={` 
        "A . B"
        ". Wedding ."
        "C . D"
      `}
      gridTemplateColumns="1fr 1fr 1fr"
      gap={4}
      p={3}
      sx={{ width: "100%", justifyItems: "center" }}
    >
      <Box gridArea="A">
        <TableCard table={tables.A} />
      </Box>
      <Box gridArea="B">
        <TableCard table={tables.B} />
      </Box>
      <Box gridArea="Wedding">
        <TableCard table={tables.Wedding} />
      </Box>
      <Box gridArea="C">
        <TableCard table={tables.C} />
      </Box>
      <Box gridArea="D">
        <TableCard table={tables.D} />
      </Box>
    </Box>
  );
};

const TableCard: React.FC<{ table: Table }> = ({ table }) => (
  <Card variant="outlined" sx={{ width: 250, minHeight: 200 }}>
    <CardContent>
      <Typography variant="h6" align="center" gutterBottom>
        {table.tableName}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {table.seats.map((seat) => (
          <Button
            key={seat.id}
            variant="contained"
            color={seat.isAvailable ? "primary" : "secondary"}
            size="small"
            sx={{
              width: "4em",
              height: "2em",
              padding: 0,
            }}
          >
            {seat.pInitial}
          </Button>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default SeatingChart;
