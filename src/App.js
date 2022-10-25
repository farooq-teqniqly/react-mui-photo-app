import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2}>
        <Sidebar></Sidebar>
        <Feed></Feed>
      </Stack>
    </Box>
  );
}

export default App;
