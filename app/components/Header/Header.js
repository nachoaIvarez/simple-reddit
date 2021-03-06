import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

import styles from './styles.css';

const Header = ({ status, ...other }) => {
  const classes = [
    styles.header,
    status === 'success' ? styles.success : null,
    status === 'failure' ? styles.failure : null,
    status === 'loading' ? styles.loading : null,
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
  status: PropTypes.string,
};

export default Header;
