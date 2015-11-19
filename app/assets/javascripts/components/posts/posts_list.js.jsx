var PostsList = React.createClass({
  render: function() {
    return (
      <ul className="posts-list">
        {
          this.props.posts.map(function(post) {
            return (
              <li key={post.id}>
                <Post post={post} currentUser={this.props.currentUser} />
              </li>
            );
          }, this)
        }
      </ul>
    );
  }
});
