import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import * as actions from '~/state/actions';
import Input from '~/components/Input';
import Post from '~/components/Post';

class Layout extends Component {
  componentWillMount() {
    const { subreddit, requestSubreddit } = this.props;

    requestSubreddit(subreddit);
  }

  render() {
    const { posts, subreddit, requestSubreddit } = this.props;

    return (
      <Flexbox flexDirection="column" minHeight="100vh">

        <Flexbox element="header" height="60px">
          <Input type="text" value={subreddit} onChange={requestSubreddit} debounce={300} />
        </Flexbox>

        <Flexbox flexGrow={1} flexDirection="column">
          {posts.map(({ data }) => <Post {...data} />)}
        </Flexbox>

        <Flexbox element="footer" height="60px">
          Footer
        </Flexbox>

      </Flexbox>
    );
  }
}

Layout.propTypes = {
  requestSubreddit: PropTypes.func,
  subreddit: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  posts: state.posts,
});

export default connect(mapStateToProps, actions)(Layout);
