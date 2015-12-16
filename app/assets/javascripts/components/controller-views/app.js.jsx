var App = React.createClass({
  stores: [CurrentUserStore, FriendRequestStore, FriendshipStore, UserStore, SearchStore],
  mixins: [ControllerView],
  getStateFromStores: function() {
    return {
      currentUser: CurrentUserStore.get(),
      sentFriendRequests: FriendRequestStore.sentFriendRequests(),
      receivedFriendRequests: FriendRequestStore.receivedFriendRequests(),
      friendships: FriendshipStore.all(),
      users: UserStore.all(),
      searchResults: SearchStore.results(),
      searchResultsPreview: SearchStore.previews()
    };
  },
  componentDidMount: function() {
    ApiUtil.fetchCurrentUserFriendRequests();
    ApiUtil.fetchCurrentUserFriends();
  },
  render: function() {
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, this.state);
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
