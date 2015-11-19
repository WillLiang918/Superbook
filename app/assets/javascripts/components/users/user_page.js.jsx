var UserPage = React.createClass({
  getStateFromStores: function() {
    var userId = parseInt(this.props.params.id);
    return {timeline: TimelineStore.find(userId)};
  },
  fetchTimeline: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchTimeline(userId);
  },
  friendRequestStatus: function() {
    var userId = parseInt(this.props.params.id);
    if (this.props.sentFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_SENT;
    } else if (this.props.receivedFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_RECEIVED;
    } else {
      return FriendConstants.NO_REQUEST;
    }
  },
  onChange: function() {
    this.setState(this.getStateFromStores());
  },
  getInitialState: function() {
    return this.getStateFromStores();
  },
  componentDidMount: function() {
    TimelineStore.addChangeListener(this.onChange);
    this.fetchTimeline();
    this.requestStatus = this.friendRequestStatus();
  },
  componentWillReceiveProps: function(newProps) {
    this.fetchTimeline(newProps.params.id);
    this.requestStatus = this.friendRequestStatus();
  },
  componentWillUnmount: function() {
    TimelineStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var timeline = this.state.timeline;

    return (
      <div className="users-page">
        <AnswerFriendRequest />
        <UserCover user={timeline.user} />
        <FriendRequestStatus user={timeline.user} status="sent" />
        <FriendRequestStatus user={timeline.user} status="none" />

        <div className="flex-container users-page-container">
          <UserSideNav user={timeline.user} />
          <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
});
