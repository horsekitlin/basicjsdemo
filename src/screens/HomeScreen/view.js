import React from "react";
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';


const HomeScreen = ({ isLoading }) => {
  if (isLoading) return <CircularProgress />;
  
  return(
      <Box m={3} display='flex' flexDirection='column'>
        Home Screen
      </Box>
  );
};

export default (HomeScreen);
