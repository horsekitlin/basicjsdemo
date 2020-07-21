import React from "react";
import isEmpty from "lodash/isEmpty";
import propTypes from "prop-types";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { TableCell, Menu } from "@material-ui/core";
import { Button } from "../Buttons";

const styles = {
  buttonIcon: {
    padding: 8
  }
};

const ButtonTableCell = styled(TableCell)`
  text-align: center !important;
  width: 100px;
  right: 23px;
  height: 39px;
`;

const MenuButtons = ({ buttonProps }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <ButtonTableCell>
      <IconButton
        style={styles.buttonIcon}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {buttonProps.map((button, index) => {
          const { text, onClick } = button;
          return <MenuItem key={`MenuItem_${text}_${index}`} onClick={onClick}>{text}</MenuItem>;
        })}
      </Menu>
    </ButtonTableCell>
  );
};

const ButtonCell = ({ buttonProp: { color, onClick, text } }) => (
  <ButtonTableCell>
    <Button color={color} onClick={onClick}>
      {text}
    </Button>
  </ButtonTableCell>
);

class ButtonsCell extends React.PureComponent {
  static propTypes = {
    buttonProps: propTypes.array.isRequired
  };

  render() {
    const { hide, buttonProps } = this.props;

    if (hide || isEmpty(buttonProps)) return <ButtonTableCell />;

    if (buttonProps.length === 1) {
      const buttonProp = buttonProps[0];
      return <ButtonCell buttonProp={buttonProp} />;
    }

    return (
      <MenuButtons buttonProps={buttonProps} handleClose={this.handleClose} />
    );
  }
}

export default ButtonsCell;
