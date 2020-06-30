import React from "react";
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';
import LayoutWrapper from '../../components/LayoutWrapper';
import DateRange from "../../components/DateRange";
import Button from '../../components/Buttons';
import FlatButton from '../../components/Buttons/FlatButton';
import LineButton from '../../components/Buttons/LineButton';
import TextButton from '../../components/Buttons/TextButton';
import Checkbox from '../../components/CheckBox';
import Selector from '../../components/Selector';
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Radio from '../../components/Radio';
import Table from '../../components/Table';

const HomeScreen = ({ isLoading }) => {
  if (isLoading) return <CircularProgress />;
  
  return(
    <LayoutWrapper>
      <Box m={3} display='flex' flexDirection='column'>
        <Box m={2} display='flex' flexDirection='column'  justifyContent='flex-start' >
          <Box display='flex' flexDirection='row'  justifyContent='flex-start' >
            <Button>Origin Button</Button>
            <FlatButton>Flat Button</FlatButton>
            <LineButton>Line Button</LineButton>
            <TextButton color='secondary'>Text Button</TextButton>
          </Box>
          <DateRange onDateChange={console.log('DateRange')} />
          <Selector value={1} />
          <Checkbox checked label='check box' />
          <Switch checked label='switch' />
          <Radio checked label='radio'/>
          <TextInput title='Text Input Label' placeholder='type here' />
          <TextInput title='Text Input Label' value='Done' isSuccess />
        </Box>
        <Box m={2} p={2}>
          <Table />
        </Box>
      </Box>
    </LayoutWrapper>
  );
};

export default (HomeScreen);
