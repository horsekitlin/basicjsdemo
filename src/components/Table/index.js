import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  Table as BasicTable,
  Paper,
  Box,
  Divider,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Selector from '../Selector';

const Header = styled.div`
  font-size: 24px;
  color: balck;
  font-weight: 900;
  width: 20%;
`;

const StyledHeader = styled(TableCell)`
  padding-left: 0;
  border-bottom: 2px solid black;
  background: white;
`;

const StyledPageSelector = styled(Selector)`
  text-align: left;
  padding-left: 5px;
  margin-left: 10px;
  border: 1px solid grey;
  border-radius: 8px;
  &::before {
    border: 0;
  }
`;

const pageSelector = [
  { text: '5/page', value: 5 },
  { text: '10/page', value: 10 }
];

const Table = ({
  title,
  rightTitle,
  headers,
  children,
  totalCount,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {

  return (
    <Fragment>
      <Box mb={2} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Header>{title}</Header>
        {rightTitle}
      </Box>
      <Box mb={2}>
        <Divider variant="fullWidth" />
      </Box>
      <TableContainer component={Paper} >
        <Box m={2} fontSize={16} fontWeight={900} >
          <Box mb={2} >{title}</Box>
          <BasicTable>
            <TableHead>
              <TableRow>
                  {headers.map(title=> 
                    <StyledHeader>{title}</StyledHeader>
                  )}
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </BasicTable>
        </Box>
        <Box m={2} display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
          <Pagination count={10} page={1} shape="rounded" onChange={handleChangePage} />
          <Typography fontSize='h6.fontSize' textAlign='right'>
            共 {totalCount} 笔
          </Typography>
          <StyledPageSelector
            variant='standard'
            defaultValue={5}
            datas={pageSelector}
            onChange={handleChangeRowsPerPage}
          />
        </Box>
      </TableContainer>
    </Fragment>
  );
};


Table.propTypes = {
  page: propTypes.number,
  totalCount: propTypes.number,
};

Table.defaultPrsops = {
  totalCount: 0,
  handleChangePage: ()=>console.log('handleChangePage'),
  handleChangeRowsPerPage: ()=>console.log('handleChangeRowsPerPage'),
};


export default Table;