var PostsList = React.createClass({
  render: function() {
    var {posts, currentUser, users, comments, likes, parent} = this.props;

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
                  parent={parent}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
});
