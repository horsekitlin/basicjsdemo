import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Header = styled.div`
  font-size: 24px;
  color: balck;
  font-weight: 900;
  width: 20%;
`;

const HeaderBar = ({ hide, title, rightTitle }) => {
  if(hide) return <Fragment />;

  return (
    <Box
      mb={2}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Header>{title}</Header>
      {rightTitle}
    </Box>
  );

};

HeaderBar.propTypes = {
  title: propTypes.string,
};

HeaderBar.defaultPrsops = {
  title: '',
};


export default HeaderBar;