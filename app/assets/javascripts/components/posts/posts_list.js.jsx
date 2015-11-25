var PostsList = React.createClass({
  render: function() {
    var {posts, currentUser, users, comments, likes, ...other} = this.props;
    debugger

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
                  comments={commentsByParent}
                  likes={likes}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
});
