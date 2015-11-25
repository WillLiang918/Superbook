var UserPage = React.createClass({
  stores: [TimelineStore, PostStore, CommentStore, LikeStore],
  getStateFromStores: function() {
    var userId = parseInt(this.props.params.id);

    var postIds = TimelineStore.find(userId);
    var posts = postIds.reduceRight(function(posts, postId) {
      var post = PostStore.find(postId);
      posts.push(post);
      return posts;
    }, []);

    var comments = CommentStore.hashSlice(postIds);
    var likes = LikeStore.all();

    return {posts: posts, comments: comments, likes: likes};
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
    this.stores.forEach(function(store) {
      store.addChangeListener(this.onChange);
    }, this);
    this.fetchUserPageData();
  },
  componentWillReceiveProps: function(newProps) {
    this.friendStatus = this.friendRequestStatus(newProps);
    if (this.props.params.id !== newProps.params.id) {
      this.fetchUserPageData(newProps.params.id);
    }
  },
  componentWillUnmount: function() {
    this.stores.forEach(function(store) {
      store.removeChangeListener(this.onChange);
    }, this);
  },
  render: function() {
    var posts = this.state.posts, answerFriendRequest, friendRequestStatus;
    var userId = parseInt(this.props.params.id);
    var user = this.props.users[userId] || {};

    switch(this.friendStatus) {
      case FriendConstants.REQUEST_RECEIVED:
        answerFriendRequest = (
          <AnswerFriendRequest
            user={user}
            accept={this.acceptFriendRequest}
            delete={this.deleteFriendRequest}
          />
        );
        break;
      case FriendConstants.REQUEST_SENT:
      case FriendConstants.NO_REQUEST:
        friendRequestStatus = (
          <FriendRequestStatus
            user={user}
            status={this.friendStatus}
            cancel={this.cancelFriendRequest}
            send={this.sendFriendRequest}
          />
        );
        break;
    }

    var derivedState = {friends: this.friends(), status: this.friendStatus, user: user};

    var children = React.Children.map(this.props.children, function(child, idx) {
      return React.cloneElement(child, Object.assign({}, this.props, this.state, derivedState));
    }, this);

    return (
      <div className="users-page">
        {answerFriendRequest}
        <UserCover
          user={user}
          status={this.friendStatus}
          send={this.sendFriendRequest}
          accept={this.acceptFriendRequest}
          cancel={this.cancelFriendRequest}
          delete={this.deleteFriendRequest}
          unfriend={this.unfriend}
          pathname={this.props.location.pathname}
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
    var users = this.props.users;
    return friendIdSet.compactMap(function(friendId) {
      return users[friendId];
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