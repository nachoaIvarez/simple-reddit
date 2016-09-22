import { Component, PropTypes } from 'react';
import DebounceInput from 'react-debounce-input';

import styles from './styles.css';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    debounce: PropTypes.number,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
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
        className={styles.input}
        minLength={2}
        debounceTimeout={this.props.debounce}
        onChange={this.handleChange}
        value={value}
      />
    );
  }
}

export default Input;
