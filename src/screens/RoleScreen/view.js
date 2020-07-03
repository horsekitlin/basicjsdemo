import React, { useState } from "react";
import {
  Box,
  TableRow,
} from '@material-ui/core';
import Table from '../../components/Table';
import TableCell from '../../components/TableCell';
import Button from '../../components/Buttons';

const RoleScreen = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = () => {
    setPage(page);
  };

  const handleChangeRowsPerPage = () => {
    setRowsPerPage(rowsPerPage);
  };

  const headers = ['角色名称', '说明', '操作'];
  const datas = [
    { name: 'administrator', desc:'admin', opt:'edit'},
    { name: 'manager', desc:'management', opt: 'edit'}
  ];
  
  return(
    <Box m={3} display='flex' flexDirection='column'>
      <Table
        title='RoleScreen'
        rightTitle={<Button> Export Action </Button>}
        headers={headers}
        children={
          datas.map(row=> (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell>{row.opt}</TableCell>
            </TableRow>
          ))
        }
        totalCount={datas.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default (RoleScreen);
