import propTypes from 'prop-types';

const SwitchCell = ({ boolean, trueChildren, falseChildren }) => (
  boolean ? trueChildren : falseChildren
);

SwitchCell.propTypes = {
  boolean: propTypes.bool,
  trueChildren: propTypes.element,
  falseChildren: propTypes.element
};

export default SwitchCell;
