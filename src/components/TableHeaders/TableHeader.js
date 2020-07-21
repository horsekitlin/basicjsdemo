import React from 'react';
import { withStyles, TableHead, TableRow, TableCell } from '@material-ui/core';


const styles = theme => ({
  headTitle: {
    fontSize: 16,
    whiteSpace: 'nowrap'
  }
})

class TableHeader extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { classes, headers } = this.props;

    return (
      <TableHead>
        <TableRow>
            {
              headers.map((title,index)=> (
                <TableCell align={index !== 0 ? "center" : "left"} key={`${title}_${index}`} className={classes.headTitle}>{title}</TableCell>
              ))
            }
        </TableRow>
      </TableHead>
    );
  }
}

export default withStyles(styles)(TableHeader);
