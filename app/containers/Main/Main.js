import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import * as actions from '~/state/actions';
import Input from '~/components/Input';
import Post from '~/components/Post';
import Header from '~/components/Header';
import Status from '~/components/Status';

class Layout extends Component {
  componentWillMount() {
    const { subreddit, requestSubreddit } = this.props;

    requestSubreddit(subreddit);
  }

  render() {
    const { posts, subreddit, requestSubreddit, status } = this.props;
    const success = status === 'success';

    return (
      <Flexbox
        alignItems="stretch"
        flexDirection="column"
        maxWidth="100vw"
        minHeight="100vh"
      >
        <Header
          height="80px"
          status={status}
        >
          {"/r/"}
          <Input
            debounce={600}
            onChange={requestSubreddit}
            type="text"
            value={subreddit}
          />
        </Header>
        <Flexbox
          alignSelf="center"
          flex="1"
          flexDirection="column"
          justifyContent={success ? 'flex-start' : 'center'}
          maxWidth="1024px"
        >
          {
            success
            ? posts.map(({ data }, index) => <Post {...data} key={index} />)
            : <Status margin="auto" status={status} />
          }
        </Flexbox>
      </Flexbox>
    );
  }
}

Layout.propTypes = {
  requestSubreddit: PropTypes.func,
  subreddit: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
};

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  posts: state.posts,
  status: state.status,
});

export default connect(mapStateToProps, actions)(Layout);
