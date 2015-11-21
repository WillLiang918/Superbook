var UserPage = React.createClass({
  getStateFromStores: function() {
    var userId = parseInt(this.props.params.id);
    return {timeline: TimelineStore.find(userId)};
  },
  fetchUserPageData: function(id) {
    var userId = id || this.props.params.id;
    ApiUtil.fetchUserPageData(userId);
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
    this.fetchUserPageData();
  },
  componentWillReceiveProps: function(newProps) {
    this.friendStatus = this.friendRequestStatus(newProps);
    if (this.props.params.id !== newProps.params.id) {
      this.fetchUserPageData(newProps.params.id);
    }
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

    var derivedState = {friends: this.friends()};

    var children = React.Children.map(this.props.children, function(child, idx) {
      return React.cloneElement(child,Object.assign({}, this.props, this.state, derivedState));
    }, this);


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

        <div className="users-page-container">
          {children}
        </div>
      </div>
    );
  },
  friends: function() {
    var userId = parseInt(this.props.params.id);
    var friendIdSet = this.props.friendships[userId] || new Set();
    return friendIdSet.map(function(friendId) {
      return UserStore.find(friendId);
    });
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
