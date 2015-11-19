var UserPage = React.createClass({
  getStateFromStores: function() {
    var userId = parseInt(this.props.params.id);
    return {timeline: TimelineStore.find(userId)};
  },
  fetchTimeline: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchTimeline(userId);
  },
  friendRequestStatus: function(props) {
    var currentUserId = props.currentUser.id;
    var userId = parseInt(props.params.id);

    if (userId == currentUserId) {
      return;
    } else if (props.sentFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_SENT;
    } else if (props.receivedFriendRequests.has(userId)) {
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
    this.friendStatus = this.friendRequestStatus(this.props);
    TimelineStore.addChangeListener(this.onChange);
    this.fetchTimeline();
  },
  componentWillReceiveProps: function(newProps) {
    this.friendStatus = this.friendRequestStatus(newProps);
    this.fetchTimeline(newProps.params.id);
  },
  componentWillUnmount: function() {
    TimelineStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var timeline = this.state.timeline;
    var answerFriendRequest, friendRequestStatus;
    switch(this.friendStatus) {
      case FriendConstants.REQUEST_RECEIVED:
        answerFriendRequest = <AnswerFriendRequest user={timeline.user} />;
        break;
      case FriendConstants.REQUEST_SENT:
      case FriendConstants.NO_REQUEST:
        friendRequestStatus = (
          <FriendRequestStatus user={timeline.user} status={this.friendStatus} />
        );
        break;
    }

    return (
      <div className="users-page">
        {answerFriendRequest}
        <UserCover user={timeline.user} />
        {friendRequestStatus}

        <div className="flex-container users-page-container">
          <UserSideNav user={timeline.user} />
          <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
});
