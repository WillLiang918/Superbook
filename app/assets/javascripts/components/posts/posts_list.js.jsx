var PostsList = React.createClass({
  render: function() {
    var {posts, currentUser, users, status, comments, ...other} = this.props;

    return (
      <ul className="posts-list">
        {
          posts.map(function(post) {
            commentsByParent = comments[post.id];

            return (
              <li key={post.id}>
                <Post
                  post={post}
                  currentUser={currentUser}
                  users={users}
                  status={status}
                  comments={commentsByParent}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
});
