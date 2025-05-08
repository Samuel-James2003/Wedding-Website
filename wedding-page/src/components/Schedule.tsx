import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { formatDistanceToNow } from "date-fns";

const Schedule: React.FC = () => {
  const woodstockDate = React.useMemo(
    () => new Date("2025-08-28T00:00:00"),
    []
  );
  const weddingDate = React.useMemo(() => new Date("2025-08-30T00:00:00"), []);

  const [woodstockCountdown, setWoodstockCountdown] = useState("");
  const [weddingCountdown, setWeddingCountdown] = useState("");
  function generateICS(
    eventTitle: string,
    description: string,
    location: string,
    startDate: Date,
    endDate: Date
  ): string {
    const pad = (num: number) => String(num).padStart(2, "0");

    const formatDate = (date: Date) =>
      `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(
        date.getUTCDate()
      )}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(
        date.getUTCSeconds()
      )}Z`;

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Your Organization//Your App//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@yourapp.com`,
      `DTSTAMP:${start}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
  }

  useEffect(() => {
    const updateCountdowns = () => {
      setWoodstockCountdown(
        formatDistanceToNow(woodstockDate, { addSuffix: true })
      );
      setWeddingCountdown(
        formatDistanceToNow(weddingDate, { addSuffix: true })
      );
    };

    updateCountdowns();
    const timer = setInterval(updateCountdowns, 60000);
    return () => clearInterval(timer);
  }, [woodstockDate, weddingDate]);

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
            Event Schedule
          </Typography>

          <Box my={3}>
            <Typography variant="h5">Woodstock Fair</Typography>
            <Typography variant="body1" gutterBottom>
              Thursday, August 28th, 2025
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {woodstockCountdown}
            </Typography>
            <Button
              variant="contained"
              href={generateICS(
                "Woodstock Fair",
                "Join us for the fair!",
                "Woodstock Fairgrounds, CT",
                new Date("2025-08-28T10:00:00"),
                new Date("2025-08-28T18:00:00")
              )}
              download="woodstock-fair.ics"
            >
              Add to Calendar
            </Button>
          </Box>

          <Box my={3}>
            <Typography variant="h5">Wedding</Typography>
            <Typography variant="body1" gutterBottom>
              Saturday, August 30th, 2025
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {weddingCountdown}
            </Typography>
            <Button
              variant="contained"
              href={generateICS(
                "Wedding",
                "Join us for the wedding celebration!",
                "Darien, CT",
                new Date("2025-08-30T15:00:00"),
                new Date("2025-08-30T23:00:00")
              )}
              download="wedding.ics"
            >
              Add to Calendar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Schedule;
