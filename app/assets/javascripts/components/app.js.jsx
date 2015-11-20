var App = React.createClass({
  getStateFromStore: function() {
    return {
      currentUser: CurrentUserStore.get(),
      sentFriendRequests: FriendRequestStore.sentFriendRequests(),
      receivedFriendRequests: FriendRequestStore.receivedFriendRequests(),
      friendships: FriendshipStore.all()
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
    CurrentUserStore.addChangeListener(this.fetchCurrentUserFriendships);
    FriendRequestStore.addChangeListener(this.onChange);
    FriendshipStore.addChangeListener(this.onChange);

    ApiUtil.fetchFriendRequests();
    this.fetchCurrentUserFriendships();
  },
  componentWillUnmount: function() {
    CurrentUserStore.removeChangeLister(this.onChange);
    FriendRequestStore.removeChangeLister(this.onChange);
    FriendshipStore.removeChangeLister(this.onChange);
  },
  render: function() {
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {...this.state});
    }, this);

    return (
      <div>
        <Header {...this.state} />
        {children}
      </div>
    );
  },
  fetchCurrentUserFriendships: function() {
    var currentUser = CurrentUserStore.get();
    if (!!currentUser) {
      ApiUtil.fetchFriendships(currentUser.id);
    }
  }
});
