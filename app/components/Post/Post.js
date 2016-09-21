import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import Image from '~/components/Image';

import styles from './styles.css';

const Post = ({ title, author, thumbnail, ups, downs, num_comments: numComments }) => (
  <Flexbox
    alignItems="center"
    padding="15px"
    className={styles.post}
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
      <span className={styles.author}>{author}</span>
      <span className={styles.title}>{title}</span>
      <Flexbox>
        <span className={styles.numComments}>{numComments}</span>
        <span className={styles.ups}>{ups}</span>
        <span className={styles.downs}>{downs}</span>
      </Flexbox>
    </Flexbox>
  </Flexbox>
);

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.number,
  ups: PropTypes.number,
  downs: PropTypes.number,
};

export default Post;
