var PostsIndex = React.createClass({
  render: function() {
    var {status, posts, currentUser, comments, user, ...other} = this.props;

    return (
      <section className="posts-index">
        <PostForm user={user} status={status} />
        <PostsList posts={posts} currentUser={currentUser} status={status} comments={comments} />
      </section>
    );
  }
});
