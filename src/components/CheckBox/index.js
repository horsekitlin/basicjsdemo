import React from 'react';
import propTypes from 'prop-types';
import { Checkbox as BasicCheckbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = ({label, ...props}) => {
  return (
    <FormControlLabel
      control={
        <BasicCheckbox
          color='primary'
          {...props} 
        />
      }
      label={label}
    />
  );
};

CheckBox.propTypes = {
  label: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func,
};

CheckBox.defaultPrsops = {
  label: '',
  checked: false,
  onChange: () => {},
};

export default CheckBox;
