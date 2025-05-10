
import React, { useState } from "react";
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
} from "@mui/material";

const Rsvp: React.FC = () => {
  const [attendance, setAttendance] = useState("");
  const [names, setNames] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [dietary, setDietary] = useState("");
  const [dinnerPreference, setDinnerPreference] = useState("");
  const [message, setMessage] = useState("");

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSctjcFdfa0s_2VHNddTLjlTJWlHoW-d_Fth8bnwHxFzg9eJfQ/formResponse";

  const submitToGoogleForm = (
    attendance: string,
    names: string,
    accommodation: string,
    dietary: string,
    dinnerPreference: string,
    message: string
  ) => {
      const form = document.createElement("form");
      form.action = GOOGLE_FORM_ACTION;
      form.method = "POST";
      form.target = "_self"; // or "_blank" if you want it in a new tab
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
    window.location.href = "/";
  };

  const handleSubmit = () => {
    if (!attendance || !names) {
      alert("Please fill in all required fields.");
      return;
    }
    submitToGoogleForm(
      attendance,
      names,
      accommodation,
      dietary,
      dinnerPreference,
      message
    );
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <FormControl fullWidth>
          <FormLabel id="rsvp-group">Will you be attending?</FormLabel>
          <RadioGroup
            aria-labelledby="rsvp-group"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            name="rsvp-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel sx={{ mt: 2 }} id="names">
            Names of the people attending
          </FormLabel>
          <TextField
            fullWidth
            variant="standard"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
          <FormLabel sx={{ mt: 2 }} id="accommodation">
            Will you require hotel accommodation?
          </FormLabel>
          <RadioGroup
            aria-labelledby="accommodation"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            name="accommodation-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

          <FormLabel sx={{ mt: 2 }} id="dietary-requirements">
            Dietary requirements (if any)
          </FormLabel>
          <TextField
            fullWidth
            variant="standard"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          />
          <FormLabel sx={{ mt: 2,whiteSpace: "pre-line"  }} id="dinner-preference">
          {"For each person attending please enter the name and meal preference.The options are salmon and chicken.\n\nFor example:\nName - Meal preference"}
          </FormLabel>
          <TextField
            fullWidth
            multiline
            variant="standard"
            value={dinnerPreference}
            onChange={(e) => setDinnerPreference(e.target.value)}
          />
          <FormLabel sx={{ mt: 2 }} id="message">
            Message to the couple
          </FormLabel>
          <TextField
            fullWidth
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            Submit
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Rsvp;
