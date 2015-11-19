var FriendRequestStatusBody = React.createClass({
  render: function() {
    var message, onClick, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        message = "Request Sent.";
        onClick = function() {};
        break;
      case FriendConstants.NO_REQUEST:
        message = (
          <span className="no-friend-request">
            To see what he shares with friends, <a href="#">send him a friend request.</a>
          </span>
        );
        onClick = this.sendFriendRequest.bind(this);
        break;
    }

    return (
      <section className="friend-request-status-body flex-container">
        <p>{message}</p>
        <FriendRequestButton {...this.props} onClick={onClick}/>
      </section>
    );
  },
  sendFriendRequest: function() {
    ApiUtil.sendFriendRequest(this.props.user.id);
  }
});
