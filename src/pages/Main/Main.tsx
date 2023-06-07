import React from "react";
import { Grid, Typography, TextField } from "@mui/material";

import { FlexColumnStart } from "../../components/primitives";
import UserList from "./components/UserList";

const MainPage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <FlexColumnStart>
      <Grid container sx={{ p: 4 }}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography variant="h1">Project Access</Typography>
        </Grid>
        <Grid xs={5}>
          <TextField
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
            placeholder="Type to filter the table"
          />
        </Grid>
      </Grid>
      <UserList />
    </FlexColumnStart>
  );
};

export default MainPage;
