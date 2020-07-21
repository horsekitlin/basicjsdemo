import React from "react";
import propTypes from "prop-types";
import { Button, withStyles } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const styles = theme => ({
  pagenation: {
    textAlign: "right"
  },
  labelTotalRecord: {
    lineHeight: "35px",
    display: "inline-block",
    padding: "0 0.5rem"
  },
  labelPager: {
    display: "inline-block",
    minWidth: "80px",
    lineHeight: "35px",
    textAlign: "center"
  },
  pageButton: {
    paddingLeft: "0.5rem",
    minWidth: "20px",
    display: "inline-block"
  }
});

class TablePagination extends React.Component {
  static propTypes = {
    page: propTypes.number,
    totalPage: propTypes.number,
    totalRecords: propTypes.number
  };

  static defaultProps = {
    page: 0,
    totalPage: 0,
    totalRecords: 0
  };

  handleGoToPage = nextPage => () => {
    const { handleGoToPage } = this.props;
    handleGoToPage(nextPage);
  };

  disablePrePage = ({ page, totalPage }) => totalPage <= 1 || page <= 0;

  disableNextPage = ({ page, totalPage }) => {
    const currentPage = page + 1;
    return totalPage <= 1 || currentPage >= totalPage;
  };

  render() {
    const { classes, page, totalPage, totalRecords } = this.props;

    return (
      <div className={classes.pagenation}>
        <span className={classes.labelTotalRecord}>共 {totalRecords} 笔</span>
        <Button
          className={classes.pageButton}
          onClick={this.handleGoToPage(page)}
          disabled={this.disablePrePage({ page, totalPage })}
        >
          <KeyboardArrowLeft />
        </Button>
        <span className={classes.labelPager}>
          {page + 1} / {totalPage}
        </span>
        <Button
          className={classes.pageButton}
          onClick={this.handleGoToPage(page)}
          disabled={this.disableNextPage({ page, totalPage })}
        >
          <KeyboardArrowRight />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TablePagination);
