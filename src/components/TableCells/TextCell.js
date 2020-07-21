import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { TableCell } from '@material-ui/core';
import Colors from '../../constants/colors.config';

const statusColors = {
  primary: Colors.primary,
  secondary: Colors.secondary,
  success: Colors.success,
  error: Colors.danger,
  warning: Colors.handling,
  handling: Colors.handling,
  frozen: Colors.greymiddle,
  default: Colors.black
};

const innerTableCell = ({ className, style, text, colSpan, rowSpan }) => (
    <TableCell colSpan={colSpan} rowSpan={rowSpan}>
      <p style={style} className={className}>{isEmpty(text) ? '--' : text}</p>
    </TableCell>
  );

const TextCell = styled(innerTableCell)`
  font-size: 0.95rem;
  color: ${props => statusColors[props.type]};
  text-align: ${props => props.textAlign};
`;

TextCell.propTypes = {
  type: propTypes.string,
  style: propTypes.object,
  colSpan: propTypes.number,
  rowSpan: propTypes.number,
  text: propTypes.oneOfType([propTypes.oneOf([null]), propTypes.string])
};

TextCell.defaultProps = {
  type: 'default',
  textAlign: 'center',
  colSpan: 1,
  rowSpan: 1,
  style: {},
  text: null
};

export default TextCell;
