import React from 'react'
import styled from 'styled-components';
import Button from './index';
import COLORS from '../../constants/colors.config';

const StyledFlatButton = styled(Button)`
    color: ${COLORS.primary};
    border-color: ${COLORS.primary};
    background-color:: ${COLORS.primary};
    margin: 0 1em 0 1em;
`;

const FlatButton = (props) => (
  <StyledFlatButton
    type='button'
    variant='outlined'
    {...props}
  />
)

export default (FlatButton)