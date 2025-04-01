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
  const [attendance, setAttendance] = useState("yes");
  const [names, setNames] = useState("");
  const [accommodation, setAccommodation] = useState("yes");
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");

  type SubmitDataProps = {
    data: string[];
    webAppUrl: string;
  };
  
  const submitDataToWebApp = async ({ data, webAppUrl }: SubmitDataProps): Promise<boolean> => {
    const formData = Object.fromEntries(data.map((value, index) => [`field${index + 1}`, value]));
  
    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",//FIXME Figure out an alternative to no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Data sent successfully!");
        return true;
      } else {
        console.error("Error sending data:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    console.log("RSVP Submission:");
    console.log("Attending:", attendance);
    console.log("Names:", names);
    console.log("Accommodation Needed:", accommodation);
    console.log("Dietary Requirements:", dietary);
    console.log("Message:", message);
    const dataList = [attendance, names, accommodation, dietary, message];
    await submitDataToWebApp({ data: dataList, webAppUrl: "" });//FIXME: Get the url from env

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
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
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
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
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
