import React from "react";
import { CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const HomeScreen = ({ isLoading }) => {
  if (isLoading) return <CircularProgress />;
  
  return(
    <Box m={2}>
    </Box>
  );
};

export default (HomeScreen);
