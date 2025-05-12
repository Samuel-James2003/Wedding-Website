import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Box,
} from "@mui/material";

const FAQ: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("./images/faq-bg.png")',
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
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Frequently Asked Questions
          </Typography>

          {[
            {
              question: "What is the dress code?",
              answer: "The dress code is semi-formal. We encourage guests to dress comfortably but elegantly.",
            },
            {
              question: "Is there parking available?",
              answer: "Yes, there is ample parking available at the venue.",
            },
            {
              question: "Are children welcome?",
              answer: "No, this is an adult only affair.",
            },
            {
              question: "What time should I arrive?",
              answer: "We recommend arriving around 5:00 PM.",
            },
          ].map((faq, idx) => (
            <Box key={faq.question} my={3} width="100%">
              {idx > 0 && <Divider />}
              <Typography variant="h5" mt={idx > 0 ? 3 : 0} align="center">
                {faq.question}
              </Typography>
              <List>
                <ListItem sx={{ justifyContent: "center" }}>
                  <ListItemText
                    primary={faq.answer}
                    sx={{ textAlign: "center" }}
                  />
                </ListItem>
              </List>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default FAQ;
