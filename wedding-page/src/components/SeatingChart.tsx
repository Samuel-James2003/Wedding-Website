import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

interface Seat {
    id: number;
    isAvailable: boolean;
}

interface Table {
    id: number;
    seats: Seat[];
}

const generateTables = (numTables: number, seatsPerTable: number): Table[] => {
    return Array.from({ length: numTables }, (_, i) => ({
        id: i + 1,
        seats: Array.from({ length: seatsPerTable }, (_, j) => ({
        id: j + 1,
        isAvailable: true,
    })),
}));
};

const SeatingChart: React.FC = () => {
    const tables = generateTables(5, 8); // 5 tables, 8 seats each
  
    return (
      <Box display="flex" flexWrap="wrap" gap={4} p={3}>
        {tables.map((table) => (
          <Card key={table.id} variant="outlined" sx={{ width: 250, height: 300 }}>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                Table {table.id}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: 200,
                  height: 200,
                  margin: "0 auto",
                  borderRadius: "50%",
                  border: "2px dashed #ccc",
                }}
              >
                {table.seats.map((seat, index, arr) => {
                  const angle = (360 / arr.length) * index;
                  const radians = (angle * Math.PI) / 180;
                  const radius = 80;
  
                  const x = radius * Math.cos(radians);
                  const y = radius * Math.sin(radians);
  
                  return (
                    <Button
                      key={seat.id}
                      variant="contained"
                      color={seat.isAvailable ? "primary" : "secondary"}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: `calc(50% + ${y}px - 16px)`,
                        left: `calc(50% + ${x}px - 16px)`,
                        minWidth: "32px",
                        height: "32px",
                        padding: 0,
                      }}
                    >
                      {seat.id}
                    </Button>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };
  
  export default SeatingChart;
