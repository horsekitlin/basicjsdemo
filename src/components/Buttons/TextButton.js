import React from 'react'
import Button from './index';

const TextButton = (props) => (
  <Button
    type='button'
    variant='text'
    {...props}
  />
);

export default (TextButton)