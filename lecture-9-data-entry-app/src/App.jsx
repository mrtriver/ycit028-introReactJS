import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// import './App.css' SINCE WE ARE USING MATERIAL UI, WE DON'T NEED THIS

function App() {
  return (
    <Box>
      <Box>
        <Typography>Mr. IRMAK</Typography>
        <Typography>Saint Leonard</Typography>
        <Box>
        <TextField id="medicare-field" label="Medicare" variant="filled" />
        </Box>
        <Box>
          
        </Box>
      </Box>
    </Box>
  );
}

export default App;
