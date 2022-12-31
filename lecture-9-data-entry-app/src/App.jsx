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
import { useRef } from "react";

// import './App.css' SINCE WE ARE USING MATERIAL UI, WE DON'T NEED THIS

function App() {

  const [medicareValue, setMedicareValue] = useState("")
  const [visitDateValue, setVisitDateValue] = useState(new Date());
  const [visitTypeValue, setVisitTypeValue] = useState("principal-visit");
  const [referralIdValue, setReferralIdValue] = useState("")

  function submitButtonHandler() {
    console.log("medicareValue", medicareValue, "visitDateValue", visitDateValue, "visitTypeValue", visitTypeValue, "referralIdValue", referralIdValue);
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
    const textRef = useRef();
    
   let referralField = null;   //Conditional Rendering
    if (visitTypeValue === "consultation") {

      referralField = (<Box>
        <TextField 
        id="referral-id-field"
        inputRef={textRef}
        label="Referring Professional ID" 
        variant="filled"
        value={referralIdValue}
        onChange={(evt) => setReferralIdValue(evt.target.value)}  // 
     
     />
      </Box>)
    }
  

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
                    const value = evt.target.value;
                    console.log(value)
                    setVisitTypeValue(value)
                    setReferralIdValue("")

                    if(value === "consultation") {
                      setTimeout(() => {
                        // const input = document.getElementById("referral-id-field")
                        // input.focus()
                        //Instead of using the above code, we can use the below code
                        textRef.current.focus()
                      }, 0)
                     
                    }
                  }}
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
            {referralField}   
           
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
