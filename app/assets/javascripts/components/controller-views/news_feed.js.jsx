var NewsFeed = React.createClass({
  stores: [NewsFeedStore, PostStore, CommentStore, LikeStore],
  mixins: [ControllerView, InfiniteScroll, Polling],
  getStateFromStores: function() {
    var postIds = NewsFeedStore.all();
    var posts = postIds.reduce(function(posts, postId) {
      var post = PostStore.find(postId);
      posts.push(post);
      return posts;
    }, []);

    var comments = CommentStore.hashSlice(postIds);
    var likes = LikeStore.all();

    return {posts: posts, comments: comments, likes: likes};
  },
  render: function() {
    var user = this.props.currentUser;

    return (
      <HomeLayout {...this.props}>
          <PostsIndex
            status={FriendConstants.SELF}
            {...this.state}
            {...this.props}
            user={user}
            parent="news-feed"
          />
      </HomeLayout>
    );
  },
  fetchInitialData: function() {
    return ApiUtil.fetchNewsFeedData();
  },
  fetchMoreData: function() {
    var posts = this.state.posts;
    var lastPost = posts[posts.length - 1];
    return ApiUtil.fetchOlderNewsFeedData(lastPost.created_at);
  },
  fetchNewerData: function() {
    var posts = this.state.posts;
    var firstPost = posts[0];
    var created_after = (firstPost && firstPost.created_at) || undefined;
    ApiUtil.fetchNewerNewsFeedData(created_after);
  }
});
