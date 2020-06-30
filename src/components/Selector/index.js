import React from 'react';
import propTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const datas = [
  { text: 'Option 1', value: 1},
  { text: 'Option 2', value: 2}
];

const Selector = (props) => {
  return (
    <Select {...props} >
    {datas.map(data => (
      <MenuItem value={data.value}>{data.text}</MenuItem>
    ))}
    </Select>
  );
};

Selector.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
};

Selector.defaultPrsops = {
  onChange: () => {},
};

export default Selector;