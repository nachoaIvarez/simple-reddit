import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';

const Image = ({ src, size = 'cover', position = 'center', ...other }) => (
  <Flexbox
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: position,
      backgroundSize: size,
    }}
    {...other}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

export default Image;
