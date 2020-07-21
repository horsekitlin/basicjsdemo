import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TableCell } from '@material-ui/core';
import Colors from '../../constants/colors';

const innerTableCell = ({ className, text, pathname }) => (
  <TableCell>
    <Link to={{ pathname }} className={className}>
      {text}
    </Link>
  </TableCell>
);

const LinkCell = styled(innerTableCell)`
  display: block;
  text-decoration: none;
  color: ${Colors.primary};
  font-size: 0.95rem;
  text-align: ${props => props.textAlign};
`;

LinkCell.propTypes = {
  textAlign: propTypes.string,
  text: propTypes.string.isRequired,
  pathname: propTypes.string.isRequired
};

LinkCell.defaultProps = {
  textAlign: 'center'
}

export default LinkCell;
