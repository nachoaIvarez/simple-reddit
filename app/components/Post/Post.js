import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import isUrl from 'is-url';
import Image from '~/components/Image';

import styles from './styles.css';

import thumbnailFallback from './unknown.png';

const Post = (props) => {
  const { vertical, data, ...other } = props;

  const thumbnail = isUrl(data.thumbnail) ? data.thumbnail : thumbnailFallback;

  return (
    <Flexbox
      alignItems="center"
      padding="15px"
      className={`${styles.post} ${vertical ? styles.white : ''}`}
      flexDirection={vertical ? 'column' : 'row'}
      maxWidth="1024px"
      {...other}
    >
      <Image
        className={styles.thumbnail}
        src={thumbnail}
        height="90px"
        width="90px"
        minHeight="90px"
        minWidth="90px"
      />
      <Flexbox flexDirection="column" justifyContent="center" marginLeft="15px">
        <span className={styles.author}>{props.data.author}</span>
        <span className={styles.title}>{props.data.title}</span>
        <Flexbox>
          <span className={styles.numComments}>{props.data.num_comments}</span>
          <span className={styles.ups}>{props.data.ups}</span>
          <span className={styles.downs}>{props.data.downs}</span>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    thumbnail: PropTypes.string,
    num_comments: PropTypes.number,
    ups: PropTypes.number,
    downs: PropTypes.number,
  }),
  vertical: PropTypes.bool,
};

export default Post;
