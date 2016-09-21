import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

import styles from './styles.css';

const Header = ({ success, failure, loading, ...other }) => {
  const classes = [
    styles.header,
    success ? styles.success : null,
    failure ? styles.failure : null,
    loading ? styles.loading : null,
  ];

  return (
    <Flexbox
      className={classes.join(' ')}
      justifyContent="center"
      alignItems="center"
      {...other}
    />
  );
};

Header.propTypes = {
  success: PropTypes.bool,
  failure: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Header;
