import React from 'react'
import { Button as BaseButton } from '@material-ui/core';

const Button = ({hide, color, ...props}) => {
  return hide
  ? null
  : <BaseButton
      type='button'
      variant = 'contained'
      color= { color || 'primary' }
      {...props}
    />
};

export default (Button)