import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { Table as BasicTable } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '../Buttons';

const Header = styled.div`
  font-size: 16px;
  color: balck;
  font-weight: 900;
  width: 20%;
`;

const datas = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

const Table = ({
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  const headers = Object.keys(datas[0]);

  return (
    <Paper>
      <Box p={1} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Header>Table Title</Header>
        <Button> Export Action </Button>
      </Box>
      <TableContainer component={Paper}>
        <BasicTable stickyHeader >
          <TableHead >
            <TableRow>
                {headers.map(title=> 
                  <TableCell>{title}</TableCell>
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(row=> (
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{(row.numeric)? 'Y': 'N'}</TableCell>
                <TableCell>{(row.disablePadding)? 'Y': 'N'}</TableCell>
                <TableCell>{row.label}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </BasicTable>
        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
          <Pagination count={10} page={1} onChange={handleChangePage} />
          <Typography variant='h7'>
            共 {datas.length} 笔
          </Typography>
        </Box>
        <TablePagination 
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={datas.length}
          rowsPerPage={5}
          page={0}
          labelRowsPerPage='rows per page'
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}` }
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          />
      </TableContainer>
    </Paper>
  );
};


Table.propTypes = {
  page: propTypes.number,
};

Table.defaultPrsops = {
  handleChangePage: ()=>console.log('handleChangePage'),
  handleChangeRowsPerPage: ()=>console.log('handleChangeRowsPerPage'),
};


export default Table;