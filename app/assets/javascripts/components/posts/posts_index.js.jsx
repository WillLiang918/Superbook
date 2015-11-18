var PostsIndex = React.createClass({
  render: function() {
    return (
      <section className="posts-index">
        <PostForm />
        <PostsList posts={this.props.posts} />
      </section>
    );
  }
});
