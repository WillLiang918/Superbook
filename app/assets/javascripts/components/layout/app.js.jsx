var App = React.createClass({
  getStateFromStore: function() {
    return {
      currentUser: CurrentUserStore.get(),
      sentFriendRequests: FriendRequestStore.sentFriendRequests(),
      receivedFriendRequests: FriendRequestStore.receivedFriendRequests()
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

    ApiUtil.fetchFriendRequests();
  },
  componentWillUnmount: function() {
    CurrentUserStore.removeChangeLister(this.onChange);
    FriendRequestStore.removeChangeLister(this.onChange);
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
  }
});
