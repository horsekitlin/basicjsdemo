import React from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

const Input = ({label, type, ...inputProps}) => {
  return (
    <div style={[contain]}>
      {!isEmpty(label) && <label for="name">{label}</label>}
      <input type="text" placeholder="請輸入名字" maxlength="10" />
    </div>
  );
};

Input.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
};

Input.defaultProps = {
  value: '',
  label: '',
  type: 'text',
};

export default Input;
