var PostsIndex = React.createClass({
  render: function() {
    var {status, posts, currentUser, comments, users, user, likes, parent, ...other} = this.props;

    return (
      <section className="posts-index">
        <PostForm user={user} status={status} parent={parent} />
        <PostsList
          posts={posts}
          currentUser={currentUser}
          comments={comments}
          users={users}
          likes={likes}
        />
      </section>
    );
  }
});
