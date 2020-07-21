import React from 'react';
import AlertDialogWrapper from '../../components/DialogWrapper';

const AlertDialog = ({
  title,
  watchData,
  mode,
  type,
  onConfirm,
  onCancel,
  onChangeHandler,
  ...props
}) => (
  <AlertDialogWrapper
    {...props}
    maxWidth='md'
    onConfirm={onConfirm}
    onCancel={onCancel}
    type={type}
    cancelText='取消'
    confirmText='确认'
  >
    {title}
  </AlertDialogWrapper>
);

export default AlertDialog;
