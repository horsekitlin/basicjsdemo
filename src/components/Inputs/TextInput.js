import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormLabel } from './InputWrappers';

const styles = theme => ({
  borderInputBaseRoot: {
    width: '100%'
  },
  borderInputBase: {
    marginTop: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    alignItems: 'center',
    border: '1px solid #d0d0d0',
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block',
    width: '100%',
    transition: '.2s',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  errorInputBase: {
    borderColor: '#ff8080',
    boxShadow: '0 0 0 0.2rem rgba(255,0, 0,.25)'
  }
});

class TextInput extends React.PureComponent {
  static propTypes = {
    hide: propTypes.bool,
    title: propTypes.string,
    defaultValue: propTypes.string
  };

  static defaultProps = {
    hide: false,
    title: '',
    defaultValue: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isPass: true
    };
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    this.setState(state => ({ ...state, value: defaultValue }));
  }

  onChange = ({ target: { value } }) => {
    this.setState(state => ({ ...state, value }));
    this.props.onChange(value);
  };

  render() {
    const {
      hide,
      title,
      classes,
      defaultValue,
      error,
      ...props
    } = this.props;

    if (hide) return null;

    return (
      <FormGroup>
        <FormLabel>{title}</FormLabel>
        <InputBase
          type={'text'}
          key={`TextInput_${defaultValue}`}
          defaultValue={defaultValue}
          classes={{
            root: classes.borderInputBaseRoot,
            input: classNames(classes.borderInputBase, {
              [classes.errorInputBase]: error
            })
          }}
          {...props}
        />
      </FormGroup>
    );
  }
}

export default withStyles(styles)(TextInput);
