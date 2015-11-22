var Timeline = React.createClass({
  render: function() {
    var {user, posts, currentUser, friends, status, ...other} = this.props;

    return (
      <div className="timeline flex-container">
        <UserSideNav friends={friends} />
        <PostsIndex posts={posts} user={user} currentUser={currentUser} status={status} />
      </div>
    );
  }
});
