var PostsIndex = React.createClass({
  render: function() {
    return (
      <section className="posts-index">
        <PostForm user={this.props.user} />
        <PostsList posts={this.props.posts} />
      </section>
    );
  }
});
