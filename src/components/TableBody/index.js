import React from "react";
import propTypes from 'prop-types';
import {
  TableBody as BaseTableBody,
  TableCell,
  TableRow
} from "@material-ui/core";

const styles = {
  emptyPanel: {
    borderBottom: '1px solid #e3e3e3',
    color: '#8b8b8b',
    padding: 15,
    textAlign: 'center',
  },
}

const EmptyContent = ({colSpan}) => (
  <TableRow>
    <TableCell colSpan={colSpan} style={styles.emptyPanel}>
      查无资料
    </TableCell>
  </TableRow>
);

class TableBody extends React.PureComponent {

  static propTypes = {
    isEmpty: propTypes.bool,
    colSpan: propTypes.number.isRequired
  }

  static defaultProps = {
    isEmpty: false
  }

  render() {
    const { isEmpty, children, colSpan } = this.props;

    return (
      <BaseTableBody>
        {isEmpty ? <EmptyContent colSpan={colSpan} /> : children}
      </BaseTableBody>
    );
  }
}

export default TableBody;
