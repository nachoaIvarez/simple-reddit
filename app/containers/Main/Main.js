import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import * as actions from '~/state/actions';
import Input from '~/components/Input';
import Post from '~/components/Post';
import Header from '~/components/Header';

class Layout extends Component {
  componentWillMount() {
    const { subreddit, requestSubreddit } = this.props;

    requestSubreddit(subreddit);
  }

  render() {
    const { posts, subreddit, requestSubreddit, success, loading, failure } = this.props;

    return (
      <Flexbox
        flexDirection="column"
        alignItems="stretch"
        minHeight="100vh"
        maxWidth="100vw"
      >
        <Header
          success={success}
          loading={loading}
          failure={failure}
          height="80px"
        >
          {"/r/"}
          <Input
            type="text"
            value={subreddit}
            onChange={requestSubreddit}
            debounce={600}
          />
        </Header>

        <Flexbox flexGrow={1} flexDirection="column" alignSelf="center" maxWidth="1024px">
          {posts.map(({ data }, index) => <Post {...data} key={index} />)}
        </Flexbox>
      </Flexbox>
    );
  }
}

Layout.propTypes = {
  requestSubreddit: PropTypes.func,
  subreddit: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  success: PropTypes.bool,
  loading: PropTypes.bool,
  failure: PropTypes.bool,
};

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  posts: state.posts,
  success: state.success,
  loading: state.loading,
  failure: state.failure,
});

export default connect(mapStateToProps, actions)(Layout);
