import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// import './App.css' SINCE WE ARE USING MATERIAL UI, WE DON'T NEED THIS

function App() {

  const [medicareValue, setMedicareValue] = useState("")
  const [visitDateValue, setVisitDateValue] = useState(dayjs("2014-08-18T21:11:54"));
  const [visitTypeValue, setVisitTypeValue] = useState("principal-visit");

  function submitButtonHandler() {
    console.log("medicareValue", medicareValue, "visitDateValue", visitDateValue, "visitTypeValue", visitTypeValue);
    () => 
      alert("clicked");
    }

    useEffect(() => { 
      const handler = (evt)=> {
        console.log("event", evt);
      }
      document.addEventListener("click", handler);
      return () => {
        document.removeEventListener("click", handler);
      }
    }, []);

    const doctorsFeeLabel = `Doctor's Fee: ${getDoctorsFee(visitTypeValue)}`;

    
   
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="column" spacing={5}> 
      
       
          <Box>
            <Typography>Mr. IRMAK</Typography>
            <Typography>Saint Leonard</Typography>
          </Box>

          <Box>
            <TextField 
             id="medicare-field"
             label="Medicare" 
             variant="filled"
             value={medicareValue}
             onChange={(evt) => setMedicareValue(evt.target.value)}  // this is the way to get the value from the input field
           
             />
          </Box>
          
            <Stack direction="column" spacing={2}>
              <Box>
                <DesktopDatePicker
                label="Date of Visit"
                inputFormat="MM/DD/YYYY"
                value={visitDateValue}
                onChange={(value) => setVisitDateValue(value)}
               
                renderInput={(params) => <TextField {...params} />}
              />

              </Box>
             

              <FormControl>
                <FormLabel id="visit-type">Type of Visit</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={visitTypeValue}
                  onChange={(evt) => {
                    console.log(evt.target.value)
                    setVisitTypeValue(evt.target.value)}}
                >
                  <FormControlLabel
                    value="principal-visit"
                    control={<Radio />}
                    label="Principle"
                  />
                  <FormControlLabel
                    value="control"
                    control={<Radio />}
                    label="Control"
                  />
                  <FormControlLabel
                    value="consultation"
                    control={<Radio />}
                    label="Consultation"
                  />
                  <FormControlLabel
                    value="riverside"
                    control={<Radio />}
                    label="RiversFamily"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            <Box>
              <Typography>{doctorsFeeLabel}</Typography>
            </Box>
          
          <Box>
            <Button
              variant="contained"
              color="success"
              onClick={submitButtonHandler}
            >
              Push The Button
            </Button>
          </Box>
        </Stack>
     
    </LocalizationProvider>
  );

}

function getDoctorsFee(visitType) {
  switch (visitType) {
    case "principal-visit":
      return 100;
    case "control":
      return 50;
    case "consultation":
      return 150;
    case "riverside":
      return 200;
    default:
      return 0;
  }
}



export default App;
