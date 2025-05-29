import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";

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
      const now = new Date();

      const getDetailedCountdown = (targetDate: Date) => {
        const totalMinutes = Math.max(
          0,
          Math.floor((targetDate.getTime() - now.getTime()) / 60000)
        );
        const months = Math.floor(totalMinutes / (30 * 24 * 60)); // approx month
        const days = Math.floor((totalMinutes % (30 * 24 * 60)) / (24 * 60));
        const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
        const minutes = totalMinutes % 60;

        return `${months} months, ${days} days, ${hours} hours, ${minutes} minutes`;
      };

      setWoodstockCountdown(getDetailedCountdown(woodstockDate));
      setWeddingCountdown(getDetailedCountdown(weddingDate));
    };

    updateCountdowns();
    const timer = setInterval(updateCountdowns, 60000);
    return () => clearInterval(timer);
  }, [woodstockDate, weddingDate]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 3,
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Event Schedule
          </Typography>

          <Box my={2}>
            <Typography variant="h6">Woodstock Fair</Typography>
            <Typography variant="body2" gutterBottom>
              Thursday, August 28th, 2025
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {woodstockCountdown}
            </Typography>
            <Button
              variant="contained"
              size="small"
              href={generateICS(
                "Woodstock Fair",
                "Join us for the fair!",
                "Woodstock Fairgrounds, CT",
                new Date("2025-08-28T10:00:00"),
                new Date("2025-08-28T18:00:00")
              )}
              download="woodstock-fair.ics"
              sx={{ mt: 1 }}
            >
              Add to Calendar
            </Button>
          </Box>

          <Box my={2}>
            <Typography variant="h6">Wedding</Typography>
            <Typography variant="body2" gutterBottom>
              Saturday, August 30th, 2025
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {weddingCountdown}
            </Typography>
            <Button
              variant="contained"
              size="small"
              href={generateICS(
                "Wedding",
                "Join us for the wedding celebration!",
                "Darien, CT",
                new Date("2025-08-30T15:00:00"),
                new Date("2025-08-30T23:00:00")
              )}
              download="wedding.ics"
              sx={{ mt: 1 }}
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
