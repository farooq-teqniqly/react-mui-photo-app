import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { randomCreatedDate } from "@mui/x-data-grid-generator";

import React from "react";
import { useState } from "react";

const columns = [
  {
    field: "team",
    headerName: "Team",
    width: 300,
  },
  {
    field: "gameTime",
    headerName: "Game Time",
    type: "dateTime",
    width: 300,
  },
  {
    field: "points",
    headerName: "Points",
    type: "number",
  },
];

function Feed() {
  const [rows, setRows] = useState([
    {
      id: 1,
      team: "Kansas",
      gameTime: new Date(2022, 10, 22, 9, 0, 0, 0),
      points: 30.5,
    },
    {
      id: 2,
      team: "Indiana",
      gameTime: new Date(2022, 10, 22, 9, 0, 0, 0),
      points: 24.0,
    },
    {
      id: 3,
      team: "Cincinnati",
      gameTime: new Date(2022, 10, 22, 9, 0, 0, 0),
      points: 18.0,
    },
    {
      id: 4,
      team: "UAB",
      gameTime: new Date(2022, 10, 21, 17, 0, 0, 0),
      points: 22.5,
    },
  ]);

  return (
    <Box flex={4} p={2} sx={{ height: "100vh" }}>
      <DataGrid rows={rows} columns={columns} experimentalFeatures={{ newEditingApi: true }} />
    </Box>
  );
}

export default Feed;
