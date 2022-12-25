import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import './App.css' SINCE WE ARE USING MATERIAL UI, WE DON'T NEED THIS

function App() {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Box>
            <Typography>Mr. IRMAK</Typography>
           <Typography>Saint Leonard</Typography>
        </Box>
          
         <Box>
            <TextField 
             id="medicare-field"
             label="Medicare"
             variant="filled" />
          </Box>
          <Box>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Box>
      
    </LocalizationProvider>
  );
}

export default App;
