import React from "react";
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';


const AccountScreen = ({ isLoading, ...props }) => {
  if (isLoading) return <CircularProgress />;
  
  return(
      <Box m={3} display='flex' flexDirection='column'>
        AccountScreen 
      </Box>
  );
};

export default (AccountScreen);
