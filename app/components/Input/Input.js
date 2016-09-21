import { Component, PropTypes } from 'react';
import DebounceInput from 'react-debounce-input';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    debounce: PropTypes.number,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    debounce: 0,
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value } = this.props;
    return (
      <DebounceInput
        minLength={2}
        debounceTimeout={this.props.debounce}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default Input;
