import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";

interface Seat {
  id: number;
  pInitial: string;
  fullName: string;
}

interface Table {
  id: number;
  tableName?: string;
  seats: Seat[];
}

const tables = [
  {
    id: 1,
    tableName: "Table A ",
    seats: [
      { id: 0, pInitial: "Place H", fullName: "Samuel James" },
      { id: 1, pInitial: "Place H", fullName: "Jessica Smith" },
      { id: 2, pInitial: "Place H", fullName: "Michael Johnson" },
      { id: 3, pInitial: "Place H", fullName: "Emily Davis" },
      { id: 4, pInitial: "Place H", fullName: "William Brown" },
      { id: 5, pInitial: "Place H", fullName: "Olivia Wilson" },
      { id: 6, pInitial: "Place H", fullName: "James Taylor" },
      { id: 7, pInitial: "Place H", fullName: "Sophia Anderson" },
    ],
  },
  {
    id: 2,
    tableName: "Table B",
    seats: [
      { id: 0, pInitial: "Place H", fullName: "Liam Brown" },
      { id: 1, pInitial: "Place H", fullName: "Emma Wilson" },
      { id: 2, pInitial: "Place H", fullName: "Noah Johnson" },
      { id: 3, pInitial: "Place H", fullName: "Ava Davis" },
    ],
  },
  {
    id: 3,
    tableName: "Wedding Party",
    seats: [
      { id: 0, pInitial: "Samuel J", fullName: "Samuel James" },
      { id: 1, pInitial: "David L", fullName: "David Marco Laufer" },
      { id: 2, pInitial: "Mateo J", fullName: "Mateo James" },
      {
        id: 3,
        pInitial: "Antionio M",
        fullName: "Antonio Miguel Lopez Vargez",
      },
      { id: 4, pInitial: "Joe ?", fullName: "Joe ?" },
      { id: 5, pInitial: "Josh ?", fullName: "Josh ?" },
      { id: 6, pInitial: "Josh E", fullName: "Josh Elek" },
      { id: 7, pInitial: "Ben S", fullName: "Ben Sodergren" },
    ],
  },
  {
    id: 4,
    tableName: "Table C",
    seats: [
      { id: 0, pInitial: "Place H", fullName: "Liam Brown" },
      { id: 1, pInitial: "Place H", fullName: "Emma Wilson" },
      { id: 2, pInitial: "Place H", fullName: "Noah Johnson" },
      { id: 3, pInitial: "Place H", fullName: "Ava Davis" },
      { id: 4, pInitial: "Place H", fullName: "Mia Brown" },
      { id: 5, pInitial: "Place H", fullName: "Lucas Wilson" },
      { id: 6, pInitial: "Place H", fullName: "Amelia Taylor" },
      { id: 7, pInitial: "Place H", fullName: "Ethan Anderson" },
    ],
  },
  {
    id: 5,
    tableName: "Table D",
    seats: [
      { id: 0, pInitial: "Place H", fullName: "Aiden Brown" },
      { id: 1, pInitial: "Place H", fullName: "Isabella Wilson" },
      { id: 2, pInitial: "Place H", fullName: "Mason Johnson" },
      { id: 3, pInitial: "Place H", fullName: "Mia Davis" },
      { id: 4, pInitial: "Place H", fullName: "Aiden Brown" },
      { id: 5, pInitial: "Place H", fullName: "Isabella Wilson" },
      { id: 6, pInitial: "Place H", fullName: "Mason Johnson" },
      { id: 7, pInitial: "Place H", fullName: "Mia Davis" },
    ],
  },
];

const SeatingChart: React.FC = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={` 
        "id1 . id2"
        ". id3 ."
        "id4 . id5"
        `}
      gridTemplateColumns="1fr 1fr 1fr"
      gap={4}
      p={3}
      sx={{ width: "100%", justifyItems: "center" }}
    >
      {tables.map((table) => (
        <Box key={table.id} gridArea={`id${table.id}`}>
          <TableCard table={table} />
        </Box>
      ))}
    </Box>
  );
};

const TableCard: React.FC<{ table: Table }> = ({ table }) => (
  <Card
    variant="outlined"
    sx={{ maxWidth: "25em", width: "auto", minHeight: "5em" }}
  >
    <CardContent>
      <Typography variant="h6" align="center" gutterBottom>
        {table.tableName}
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {table.seats.map((seat) => (
          <Tooltip title={seat.fullName} key={seat.id} arrow>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                width: "auto",
                height: "2em",
                padding: 0.5,
              }}
            >
              {seat.pInitial}
            </Button>
          </Tooltip>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default SeatingChart;
