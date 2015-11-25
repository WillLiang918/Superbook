var FriendsIndex = React.createClass({
  getInitialState: function() {
    return {search: ""};
  },
  render: function() {
    var { friends, ...other } = this.props;
    var searchRegex = new RegExp(this.state.search, "i");
    var filteredFriends = friends.filter(function(friend) {
      return searchRegex.test(friend.first_name + " " + friend.last_name);
    });

    return (
      <section className="friends-index">
        <FriendsHeader _onChange={this._onChange} search={this.state.search} />
        <FriendsList {...other} friends={filteredFriends} />
      </section>
    );
  },
  _onChange: function(e) {
    this.setState({search: e.target.value});
  }
});
