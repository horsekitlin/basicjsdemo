import React from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import { FormGroup, FormLabel } from './InputWrappers';

const styles = theme => ({
  borderPicker: {
    flex: 1,
    marginTop: 'auto',
    alignItems: 'center',
    display: 'inline-block',
    border: '1px solid #d0d0d0',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  selectRoot: {
    padding: 0
  }
});

class SelectInput extends React.PureComponent {
  static propTypes = {
    defaultItem: propTypes.object,
    items: propTypes.object.isRequired,
    defaultValue: propTypes.oneOfType([
      propTypes.string,
      propTypes.number
    ])
  };

  static defaultProps = {
    defaultItem: { ALL: { text: '全部' } },
    defaultValue: ''
  };

  constructor(props) {
    super(props);

    const { defaultItem, items, defaultValue } = this.props;
    const selectItems = { ...defaultItem, ...items };

    const selectedValue = isEmpty(defaultValue) ? 'ALL': defaultValue;

    this.state = {
      selectItems,
      selectedValue
    };
  }

  onChange = ({ target: {name, value: selectedValue}}) => {
    const value = selectedValue === 'ALL' ? null : selectedValue;
    this.setState(state=>({...state, selectedValue}));
    this.props.onChange({name, value});
  };

  render() {
    const { selectItems, selectedValue } = this.state;
    const { classes, title, name } = this.props;

    const itemKeys = Object.keys(selectItems);

    return (
      <FormGroup>
        <FormLabel>{title}</FormLabel>
        <Select
          name={name}
          value={selectedValue}
          disableUnderline={true}
          className={classes.borderPicker}
          onChange={this.onChange}
          classes={{
            root: classes.selectRoot
          }}
        >
          {itemKeys.map((key, index) => {
            const { text, disabled, notForSelect } = selectItems[key];

            if(notForSelect) return null;

            return (
              <MenuItem
                key={`${key}_${index}`}
                value={key}
                disabled={disabled ? disabled : false}
              >
                {text}
              </MenuItem>
            );
          })}
        </Select>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(SelectInput);
