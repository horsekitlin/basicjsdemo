import React from 'react';
import propTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import TextCell from '../TextCell';
import { ACTIVE_STATUS } from '../../../constants/status.config';

const ActiveStatusCell = ({ textAlign, status }) => {
  const activeStatus = ACTIVE_STATUS[status];
  if(isEmpty(activeStatus)) return <TextCell textAlign={textAlign} />

  const {type, text} = activeStatus;
  return <TextCell textAlign={textAlign} type={type} text={text}/>
}

ActiveStatusCell.propTypes = {
  status: propTypes.oneOf(['ACTIVE', 'NONACTIVE']).isRequired
};

export default ActiveStatusCell;
