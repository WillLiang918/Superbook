var Timeline = React.createClass({
  render: function() {
    var timeline = this.props.timeline;
    var currentUser = this.props.currentUser;
    var friends = this.props.friends;

    return (
      <div className="timeline flex-container">
        <UserSideNav friends={friends} />
        <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={currentUser} />
      </div>
    );
  }
});
