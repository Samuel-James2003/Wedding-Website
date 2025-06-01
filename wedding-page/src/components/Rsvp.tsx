import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Paper,
  Box,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { AppPaths } from "../utils/AppPaths";

const Rsvp: React.FC = () => {
  const [attendance, setAttendance] = useState("");
  const [names, setNames] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [dietary, setDietary] = useState("");
  const [dinnerPreference, setDinnerPreference] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSctjcFdfa0s_2VHNddTLjlTJWlHoW-d_Fth8bnwHxFzg9eJfQ/formResponse";

  const submitToGoogleForm = () => {
    if (!iframeRef.current) return;
    const form = document.createElement("form");
    form.action = GOOGLE_FORM_ACTION;
    form.method = "POST";
    form.target = "form-result";
    form.style.display = "none";
    const fields = {
      "entry.877086558": attendance,
      "entry.1498135098": names,
      "entry.898891732": accommodation,
      "entry.398629191": dietary,
      "entry.949326767": dinnerPreference,
      "entry.2606285": message,
    };
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement(
        value.includes("\n") ? "textarea" : "input"
      );
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const handleSubmit = () => {
    if (!attendance || !names) {
      alert("Please fill in all required fields.");
      return;
    }
    submitToGoogleForm();
    setSubmitted(true);
  };

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
          {!submitted ? (
            <>
              <Typography variant="h4" gutterBottom align="center">
                Please fill out the form below to RSVP
              </Typography>

              <FormControl fullWidth>
                <FormLabel id="rsvp-group">Will you be attending?</FormLabel>
                <RadioGroup
                  aria-labelledby="rsvp-group"
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  name="rsvp-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <Divider sx={{ my: 2 }} />

                <FormLabel>Names of the people attending</FormLabel>
                <TextField
                  fullWidth
                  variant="standard"
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                />

                <Divider sx={{ my: 2 }} />

                <FormLabel>Will you require hotel accommodation?</FormLabel>
                <RadioGroup
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <Divider sx={{ my: 2 }} />

                <FormLabel>Dietary requirements (if any)</FormLabel>
                <TextField
                  fullWidth
                  variant="standard"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                />

                <Divider sx={{ my: 2 }} />

                <FormLabel sx={{ whiteSpace: "pre-line" }}>
                  {
                    "For each person attending please enter the name and meal preference. The options are salmon and chicken.\n\nFor example:\nName - Meal preference"
                  }
                </FormLabel>
                <TextField
                  fullWidth
                  multiline
                  variant="standard"
                  value={dinnerPreference}
                  onChange={(e) => setDinnerPreference(e.target.value)}
                />

                <Divider sx={{ my: 2 }} />

                <FormLabel>Message to the couple (optional)</FormLabel>
                <TextField
                  fullWidth
                  variant="standard"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  fullWidth
                  sx={{ mt: 3 }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </FormControl>
            </>
          ) : (
            <Typography variant="h4" align="center">
              Thank you for your response!
            </Typography>
          )}
          <iframe
            ref={iframeRef}
            name="form-result"
            width="100%"
            height="600"
            style={{
              display: submitted ? "block" : "none"
            }}
            title="Form Response"
          />

          <Box mt={2} textAlign="center">
            <Button component={Link} to="/">
              Back home
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Rsvp;
