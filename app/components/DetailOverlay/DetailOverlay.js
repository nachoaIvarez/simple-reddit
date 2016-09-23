import { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Post from '~/components/Post';

import styles from './styles.css';

const DetailOverlay = ({ post, ...other }) => {
  const sendMail = ({ link }) => {
    window.open(`mailto:?subject=Look what I\'ve found on Reddit!&body=${link}`);
  };

  const openLink = ({ link }) => {
    window.open(link, '_blank');
  };

  return (
    <Flexbox
      className={styles.overlay}
      justifyContent="center"
      alignItems="center"
      {...other}
    >
      <Draggable type="link" data={post.url}>
        <Post data={post} width="250px" vertical />
      </Draggable>
      <Flexbox margin="40px" maxWidth="200px">
        <span className={styles.text}>Drag the card on the left to the desired action</span>
      </Flexbox>
      <Flexbox flexDirection="column">
        <Droppable types={['link']} onDrop={openLink}>
          <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={styles.card}
            height="200px"
            width="200px"
            marginBottom="50px"
          >
            <Flexbox className={styles.icon} margin="30px 0">➡️</Flexbox>
            {'GO TO POST'}
          </Flexbox>
        </Droppable>
        <Droppable types={['link']} onDrop={sendMail}>
          <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={styles.card}
            height="200px"
            width="200px"
          >
            <Flexbox className={styles.icon} margin="30px 0">✉️</Flexbox>
            {'EMAIL TO A FRIEND'}
          </Flexbox>
        </Droppable>
      </Flexbox>
    </Flexbox>
  );
};

DetailOverlay.propTypes = {
  post: PropTypes.object.isRequired,
};

export default DetailOverlay;
