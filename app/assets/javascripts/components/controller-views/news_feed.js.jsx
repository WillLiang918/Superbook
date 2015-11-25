var NewsFeed = React.createClass({
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

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div className="main-container flex-container">
        <nav className="side-nav"></nav>
        <section className="feed">

        </section>
        <aside className="aside"></aside>
      </div>
    );
  }
});
