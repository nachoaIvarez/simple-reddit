import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

import Image from '~/components/Image';

const Post = ({ title, author, thumbnail, ups, downs, num_comments: numComments }) => (
  <Flexbox>
    <Image src={thumbnail} height="90px" width="90px" />
    {title}
    {author}
    {numComments}
    {ups}
    {downs}
  </Flexbox>
);

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  thumbnail: PropTypes.string,
  num_comments: PropTypes.string,
  ups: PropTypes.string,
  downs: PropTypes.string,
};

export default Post;
