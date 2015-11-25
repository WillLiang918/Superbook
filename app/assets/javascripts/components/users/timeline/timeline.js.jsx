var Timeline = React.createClass({
  render: function() {
    var {user, users, posts, currentUser, friends, status, comments, likes, ...other} = this.props;

    return (
      <div className="timeline flex-container">
        <UserSideNav friends={friends} />
        <PostsIndex
          posts={posts}
          user={user}
          users={users}
          currentUser={currentUser}
          status={status}
          comments={comments}
          likes={likes}
          parent="timeline"
        />
      </div>
    );
  }
});
