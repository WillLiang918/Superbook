var Timeline = React.createClass({
  render: function() {
    var { timeline, currentUser, friends, status, ...other } = this.props;

    return (
      <div className="timeline flex-container">
        <UserSideNav friends={friends} />
        <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={currentUser} status={status} />
      </div>
    );
  }
});
