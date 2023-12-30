import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Gender"></input>
      <input type="password" placeholder="Password"></input>
    </Box>
  );
}

export default App;
