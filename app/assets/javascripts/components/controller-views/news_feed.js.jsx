var NewsFeed = React.createClass({
  stores: [NewsFeedStore, PostStore, CommentStore, LikeStore],
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
  onChange: function() {
    this.setState(this.getStateFromStores());
  },
  getInitialState: function() {
    return this.getStateFromStores();
  },
  componentDidMount: function() {
    this.stores.forEach(function(store) {
      store.addChangeListener(this.onChange);
    }, this);

    this.fetchInitialPosts();
    $(window).on("scroll", this.onScroll);
  },
  componentWillUnmount: function() {
    this.stores.forEach(function(store) {
      store.removeChangeListener(this.onChange);
    }, this);

    $(window).off("scroll", this.onScroll);
  },
  render: function() {
    var user = this.props.currentUser;

    return (
      <HomeLayout>
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
  fetchInitialPosts: function() {
    this._isFetching = true;

    ApiUtil.fetchNewsFeedData().done(function() {
      this._isFetching = false;
    }.bind(this));
  },
  fetchOlderPosts: function() {
    if (this._isFetching || this._done) return;

    this._isFetching = true;
    var posts = this.state.posts;
    var lastPost = posts[posts.length - 1];

    ApiUtil.fetchOlderNewsFeedData(lastPost.created_at).done(function(data) {
      this._isFetching = false;
      if (data.news_feed.length === 0) {
        this._done = true;
      }

    }.bind(this));
  },
  scrollFetchPercentage: .75,
  onScroll: function(e) {
    var maxScroll = $(document).height() - $(window).height();
    var percentage = window.scrollY / maxScroll;

    if (percentage >= this.scrollFetchPercentage) {
      this.fetchOlderPosts();
    }
  }
});
