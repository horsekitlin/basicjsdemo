import React from 'react';
import styled from 'styled-components';
import { TableRow as BaseTableRow } from '@material-ui/core';

const InnerTableRow = ({ className, children }) => (
  <BaseTableRow className={className}>
    {children}
  </BaseTableRow>
)

const TableRow = styled(InnerTableRow)`
  & td {
    white-space: nowrap;
    padding: 5px 15px;
    background-color: ${props => props.isNew ? '#fff5d7': '#fff'} !important;
  }
`

export default TableRow;
