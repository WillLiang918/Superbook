var Search = React.createClass({
  componentDidMount: function() {
    ApiUtil.fetchUserSearch(this.props.params.search);
  },
  componentWillReceiveProps: function(newProps) {
    var newSearch = newProps.params.search, oldSearch = this.props.params.search;
    if (newSearch !== oldSearch) {
      ApiUtil.fetchUserSearch(newSearch);
    }
  },
  render: function() {
    var searchResults = this.props.searchResults, search = this.props.params.search, results;
    results = this.props.searchResults.map(function(result) {
      return (
        <li key={result.id}>
          <UserSearchResult user={result} status={this.friendStatus(result)} search={search} />
        </li>
      );
    }, this);

    return (
      <HomeLayout>
        <ul className="search-result-list">
          {searchResults.length > 0 ? <UserSearchTitle /> : <BlankSearch search={search} />}
          {results}
        </ul>
      </HomeLayout>
    );
  },
  friendStatus: function(user) {
    var {currentUser, sentFriendRequests, receivedFriendRequests, friendships, ...other} = this.props;
    var currentUserFriendships = friendships[currentUser.id];

    if (user.id === currentUser.id) {
      return FriendConstants.SELF;
    } else if (currentUserFriendships && currentUserFriendships.has(user.id)) {
      return FriendConstants.FRIENDS;
    } else if (sentFriendRequests.has(user.id)) {
      return FriendConstants.REQUEST_SENT;
    } else if (receivedFriendRequests.has(user.id)) {
      return FriendConstants.REQUEST_RECEIVED;
    } else {
      return FriendConstants.NO_REQUEST;
    }
  }
});
