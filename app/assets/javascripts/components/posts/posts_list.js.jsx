var PostsList = React.createClass({
  render: function() {
    var {posts, currentUser, status, comments, ...other} = this.props;

    return (
      <ul className="posts-list">
        {
          posts.map(function(post) {
            commentsByParent = comments[post.id];

            return (
              <li key={post.id}>
                <Post post={post} currentUser={currentUser} status={status} comments={commentsByParent}/>
              </li>
            );
          })
        }
      </ul>
    );
  }
});
