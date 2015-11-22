var PostsIndex = React.createClass({
  render: function() {
    var status = this.props.status;

    return (
      <section className="posts-index">
        <PostForm user={this.props.user} status={status} />
        <PostsList posts={this.props.posts} currentUser={this.props.currentUser} status={status} />
      </section>
    );
  }
});
