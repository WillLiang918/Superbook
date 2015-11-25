var NewsFeed = React.createClass({
  stores: [NewsFeedStore, PostStore, CommentStore, LikeStore],
  getStateFromStores: function() {
    var postIds = NewsFeedStore.all();
    var posts = postIds.reduceRight(function(posts, postId) {
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
    ApiUtil.fetchNewsFeedData();
  },
  componentWillUnmount: function() {
    this.stores.forEach(function(store) {
      store.removeChangeListener(this.onChange);
    }, this);
  },
  render: function() {
    var user = this.props.currentUser;

    return (
      <div className="main-container flex-container">
        <nav className="side-nav"></nav>
        <section className="feed">
          <PostsIndex
            status={FriendConstants.SELF}
            {...this.state}
            {...this.props}
            user={user}
            parent="news-feed"
          />
        </section>
        <aside className="aside"></aside>
      </div>
    );
  }
});
