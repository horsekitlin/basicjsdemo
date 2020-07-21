import React from 'react';
import propTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import styles from './styles.css';
import withStyles from '@material-ui/core/styles/withStyles';
import { FormGroup, FormLabel } from '../InputWrappers';

class DateRange extends React.Component {
  static propTypes = {
    dateFormat: propTypes.string,
    defaultStartDate: propTypes.oneOfType([
      propTypes.oneOf([null]),
      propTypes.string
    ]),
    defaultEndDate: propTypes.oneOfType([
      propTypes.oneOf([null]),
      propTypes.string
    ]),
    onChange: propTypes.func
  };

  static defaultProps = {
    dateFormat: 'yyyy-MM-dd',
    startDate: null,
    endDate: null,
    onChange: state => state
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null
    };
  }

  componentDidMount() {
    const { defaultSelectedDate } = this.props;
    const selectedDate = defaultSelectedDate
      ? new Date(defaultSelectedDate)
      : null;

    this.setState(state => ({ ...state, selectedDate }));
  }

  onChangeHandler = selectedDate => {
    const { onChange, id } = this.props;
    this.setState(state => ({ ...state, selectedDate }));
    onChange(id)(selectedDate);
  };

  render() {
    const { title, dateFormat, onBlur } = this.props;
    const { selectedDate } = this.state;

    return (
      <FormGroup>
        <FormLabel>{title}</FormLabel>
        <DatePicker
          className='date_picker_input_field'
          selected={selectedDate}
          dateFormat={dateFormat}
          onBlur={onBlur}
          onChange={this.onChangeHandler}
        />
      </FormGroup>
    );
  }
}

export default withStyles(styles)(DateRange);
