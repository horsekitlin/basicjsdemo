import React from 'react';
import DialogWrapper from '../../DialogWrapper';

const AlertDialog = ({
  title,
  watchData,
  mode,
  level,
  onConfirm,
  onCancel,
  onChangeHandler,
  ...props
}) => (
  <DialogWrapper
    {...props}
    maxWidth='md'
    onConfirm={onConfirm}
    onCancel={onCancel}
    level={level}
    cancelText='取消'
    confirmText='确认'
  >
    {title}
  </DialogWrapper>
);

export default AlertDialog;
