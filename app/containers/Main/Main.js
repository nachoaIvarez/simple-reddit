import { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import * as actions from '~/state/actions';
import Input from '~/components/Input';
import Post from '~/components/Post';
import Header from '~/components/Header';
import Status from '~/components/Status';
import DetailOverlay from '~/components/DetailOverlay';

class Main extends Component {
  componentWillMount() {
    const { subreddit, requestSubreddit } = this.props;

    requestSubreddit(subreddit);
  }

  render() {
    const {
      posts,
      subreddit,
      requestSubreddit,
      status,
      detailPost,
      showDetail,
      hideDetail,
    } = this.props;

    const success = status === 'success';

    const renderedPosts = posts.map(({ data }, index) => (
      <Post data={data} key={index} onClick={() => showDetail(data)} />
    ));

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
            debounce={500}
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
          {success ? renderedPosts : <Status margin="auto" status={status} />}
        </Flexbox>
        {detailPost && <DetailOverlay post={detailPost} onClick={hideDetail} />}
      </Flexbox>
    );
  }
}

Main.propTypes = {
  requestSubreddit: PropTypes.func,
  subreddit: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  detailPost: PropTypes.object,
  showDetail: PropTypes.func,
  hideDetail: PropTypes.func,
};

const mapStateToProps = state => ({
  subreddit: state.subreddit,
  posts: state.posts,
  status: state.status,
  detailPost: state.detailPost,
});

export default connect(mapStateToProps, actions)(Main);
