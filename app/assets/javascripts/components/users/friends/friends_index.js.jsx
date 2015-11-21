var FriendsIndex = React.createClass({
  render: function() {
    return (
      <section className="friends-index">
        <FriendsHeader />
        <FriendsList {...this.props} />
      </section>
    );
  }
});
