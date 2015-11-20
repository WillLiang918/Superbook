var UserPage = React.createClass({
  getStateFromStores: function() {
    var userId = parseInt(this.props.params.id);
    return {timeline: TimelineStore.find(userId)};
  },
  fetchTimeline: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchTimeline(userId);
  },
  onChange: function() {
    this.setState(this.getStateFromStores());
  },
  getInitialState: function() {
    return this.getStateFromStores();
  },
  componentWillMount: function() {
    this.friendStatus = FriendConstants.SELF;
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
        answerFriendRequest = (
          <AnswerFriendRequest
            user={timeline.user}
            accept={this.acceptFriendRequest}
            delete={this.deleteFriendRequest}
          />
        );
        break;
      case FriendConstants.REQUEST_SENT:
      case FriendConstants.NO_REQUEST:
        friendRequestStatus = (
          <FriendRequestStatus
            user={timeline.user}
            status={this.friendStatus}
            cancel={this.cancelFriendRequest}
            send={this.sendFriendRequest}
          />
        );
        break;
    }
    console.log(this.friendStatus);

    return (
      <div className="users-page">
        {answerFriendRequest}
        <UserCover
          user={timeline.user}
          status={this.friendStatus}
          send={this.sendFriendRequest}
          accept={this.acceptFriendRequest}
          cancel={this.cancelFriendRequest}
          delete={this.deleteFriendRequest}
          unfriend={this.unfriend}
        />
        {friendRequestStatus}

        <div className="flex-container users-page-container">
          <UserSideNav user={timeline.user} />
          <PostsIndex posts={timeline.posts} user={timeline.user} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  },
  friendRequestStatus: function(props) {
    var currentUserId = props.currentUser.id;
    var userId = parseInt(props.params.id);
    var currentUserFriendships = props.friendships[currentUserId];

    if (userId == currentUserId) {
      return FriendConstants.SELF;
    } else if (currentUserFriendships && currentUserFriendships.has(userId)) {
      return FriendConstants.FRIENDS;
    } else if (props.sentFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_SENT;
    } else if (props.receivedFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_RECEIVED;
    } else {
      return FriendConstants.NO_REQUEST;
    }
  },
  sendFriendRequest: function() {
    var userId = parseInt(this.props.params.id);
    ApiUtil.sendFriendRequest(userId);
  },
  cancelFriendRequest: function() {
    var userId = parseInt(this.props.params.id);
    ApiUtil.cancelFriendRequest(userId);
  },
  acceptFriendRequest: function() {
    var userId = parseInt(this.props.params.id);
    ApiUtil.acceptFriendRequest(userId);
  },
  deleteFriendRequest: function() {
    var userId = parseInt(this.props.params.id);
    ApiUtil.deleteFriendRequest(userId);
  },
  unfriend: function() {
    var userId = parseInt(this.props.params.id);
    ApiUtil.unfriend(userId);
  }
});
