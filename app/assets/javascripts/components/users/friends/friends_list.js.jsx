var FriendsList = React.createClass({
  render: function() {
    var friends = this.props.friends.map(function(friend) {
      var status = this.friendRequestStatus(friend);

      return (
        <li key={friend.id}>
          <Friend user={friend} status={status} />
        </li>
      );
    }, this);


    return (
      <ul className="friends-list">{friends}</ul>
    );
  },
  friendRequestStatus: function(friend) {
    var currentUserId = this.props.currentUser.id;
    var userId = friend.id;
    var currentUserFriendships = this.props.friendships[currentUserId];
    var sentFriendRequests = this.props.sentFriendRequests;
    var receivedFriendRequests = this.props.receivedFriendRequests;

    if (userId == currentUserId) {
      return FriendConstants.SELF;
    } else if (currentUserFriendships && currentUserFriendships.has(userId)) {
      return FriendConstants.FRIENDS;
    } else if (sentFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_SENT;
    } else if (receivedFriendRequests.has(userId)) {
      return FriendConstants.REQUEST_RECEIVED;
    } else {
      return FriendConstants.NO_REQUEST;
    }
  }
});
