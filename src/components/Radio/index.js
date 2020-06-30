import React from 'react';
import propTypes from 'prop-types';
import { Radio as BasicRadio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Radio = ({label, ...props}) => {
  return (
    <FormControlLabel
      control={
        <BasicRadio
          color='primary'
          {...props} 
        />
      }
      label={label}
    />
  );
};

Radio.propTypes = {
  label: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func,
};

Radio.defaultPrsops = {
  label: '',
  checked: true,
  onChange: () => {},
};

export default Radio;
