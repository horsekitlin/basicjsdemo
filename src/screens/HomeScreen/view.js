import React from "react";
import { CircularProgress } from '@material-ui/core';
import DateRange from "../../components/DateRange";
import LayoutWrapper from '../../components/LayoutWrapper';

const HomeScreen = ({ isLoading }) => {

  if (isLoading) return <CircularProgress />;

  return(
    <LayoutWrapper>
      Home Screen
      <DateRange onDateChange={console.log('HomeScreen')}/>
    </LayoutWrapper>
  );
};

export default HomeScreen;
