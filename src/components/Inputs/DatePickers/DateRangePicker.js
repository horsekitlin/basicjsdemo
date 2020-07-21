import React from 'react';
import propTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Typography } from '@material-ui/core';
import styles from './styles.css';
import { FormGroup, FormLabel } from '../InputWrappers';
import withStyles from '@material-ui/core/styles/withStyles';

const wordStyles = {
  middleWord: {
    paddingTop: 8
  },
  InputGroup: {
    width: '100%',
    display: 'flex',
    marginTop: 'auto'
  }
};

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
    onDateChange: propTypes.func
  };

  static defaultProps = {
    dateFormat: 'yyyy-MM-dd',
    startDate: null,
    endDate: null,
    onDateChange: state => state
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }

  componentDidMount() {
    const { defaultStartDate, defaultEndDate } = this.props;
    const startDate = defaultStartDate ? new Date(defaultStartDate) : null;
    const endDate = defaultEndDate ? new Date(defaultEndDate) : null;

    this.setState(state => ({ ...state, startDate, endDate }));
  }

  onStartDateChange = startDate => {
    const { id: inputId } = this.props;
    const id = `${inputId}StartDate`;

    this.setState(state => ({ ...state, startDate }));
    this.props.onChange(id)(startDate);
  };

  onEndDateChange = endDate => {
    const { id: inputId } = this.props;
    const id = `${inputId}EndDate`;

    this.setState(state => ({ ...state, endDate }));
    this.props.onChange(id)(endDate);
  };

  render() {
    const { title, dateFormat } = this.props;
    const { startDate, endDate } = this.state;

    return (
      <FormGroup>
        <FormLabel>{title}</FormLabel>
        <span style={wordStyles.InputGroup}>
          <DatePicker
            className='date_picker_input_field'
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat={dateFormat}
            onChange={this.onStartDateChange}
          />
          <Typography
            style={wordStyles.middleWord}
            component='span'
            color='inherit'
          >
            至
          </Typography>
          <DatePicker
            className='date_picker_input_field'
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat={dateFormat}
            onChange={this.onEndDateChange}
          />
        </span>
      </FormGroup>
    );
  }
}

export default withStyles(styles)(DateRange);
