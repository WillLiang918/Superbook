var App = React.createClass({
  stores: [CurrentUserStore, FriendRequestStore, FriendshipStore, UserStore, SearchStore],
  getStateFromStore: function() {
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
  getInitialState: function() {
    return this.getStateFromStore();
  },
  onChange: function() {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function() {
    this.stores.forEach(function(store) {
      store.addChangeListener(this.onChange);
    }, this);

    ApiUtil.fetchCurrentUserFriendRequests();
    ApiUtil.fetchCurrentUserFriends();

    var currentUser = this.state.currentUser;
    if (currentUser) {
      var name = currentUser.first_name + " " + currentUser.last_name;
      ApiUtil.removeDemoUser(name);
    }
  },
  componentWillUnmount: function() {
    this.stores.forEach(function(store) {
      store.removeChangeListener(this.onChange);
    }, this);

    var currentUser = this.state.currentUser;
    if (currentUser) {
      var name = currentUser.first_name + " " + currentUser.last_name;
      ApiUtil.addDemoUser(name);
    }
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
