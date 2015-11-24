var App = React.createClass({
  getStateFromStore: function() {
    return {
      currentUser: CurrentUserStore.get(),
      sentFriendRequests: FriendRequestStore.sentFriendRequests(),
      receivedFriendRequests: FriendRequestStore.receivedFriendRequests(),
      friendships: FriendshipStore.all(),
      users: UserStore.all(),
    };
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  onChange: function() {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function() {
    CurrentUserStore.addChangeListener(this.onChange);
    FriendRequestStore.addChangeListener(this.onChange);
    FriendshipStore.addChangeListener(this.onChange);
    UserStore.addChangeListener(this.onChange);

    ApiUtil.fetchCurrentUserFriendRequests();
    ApiUtil.fetchCurrentUserFriends();
  },
  componentWillUnmount: function() {
    CurrentUserStore.removeChangeListener(this.onChange);
    FriendRequestStore.removeChangeListener(this.onChange);
    FriendshipStore.removeChangeListener(this.onChange);
    UserStore.removeChangeListener(this.onChange);
  },
  render: function() {
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div>
        <Header {...this.state} requesters={this.requesters()} />
        {children}
      </div>
    );
  },
  requesters: function() {
    return this.state.receivedFriendRequests.compactMap(function(userId) {
      return this.state.users[userId];
    }, this);
  }
});
