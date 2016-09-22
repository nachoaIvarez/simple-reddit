import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

import styles from './styles.css';

const Status = ({ status, ...other }) => {
  const classes = [
    styles.status,
    status === 'failure' ? styles.failure : null,
    status === 'loading' ? styles.loading : null,
  ];

  return (
    <Flexbox
      className={classes.join(' ')}
      {...other}
    />
  );
};

Status.propTypes = {
  status: PropTypes.oneOf(['loading', 'failure']),
};

export default Status;
