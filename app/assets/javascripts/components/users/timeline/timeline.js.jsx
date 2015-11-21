var Timeline = React.createClass({
  render: function() {
    var timeline = this.props.timeline, currentUser = this.props.currentUser;

    return (
      <div className="timeline flex-container">
        <UserSideNav user={timeline.user} />
        <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={currentUser} />
      </div>
    );
  }
});
