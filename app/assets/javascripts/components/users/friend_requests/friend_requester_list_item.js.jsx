var FriendRequestListItem = React.createClass({
  render: function() {
    var requester = this.props.requester;
    var requesterUrl = "/users/" + requester.id;
    var avatarUrl = requester.avatar.profile;
    var name = requester.first_name + " " + requester.last_name;

    return (
      <div className="friend-request-list-item flex-container">
        <Link to={requesterUrl}>
          <img src={avatarUrl} className="friend-request-thumb" />
        </Link>

        <div className="flex-container request-body">
          <Link to={requesterUrl}>{name}</Link>

          <div className="friend-request-response">
            <button className="blue" onClick={this.accept}>Confirm</button>
            <button className="gray" onClick={this.delete}>Delete Request</button>
          </div>
        </div>
      </div>
    );
  },
  accept: function() {
    var requester = this.props.requester;
    ApiUtil.acceptFriendRequest(requester.id);
  },
  delete: function() {
    var requester = this.props.requester;
    ApiUtil.deleteFriendRequest(requester.id);
  }
});
