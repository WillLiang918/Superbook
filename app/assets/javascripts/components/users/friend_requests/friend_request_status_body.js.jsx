var FriendRequestStatusBody = React.createClass({
  render: function() {
    var message, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        message = "Request Sent.";
        break;
      case FriendConstants.NO_REQUEST:
        message = (
          <span className="no-friend-request">
            To see what he shares with friends, <a href="#">send him a friend request.</a>
          </span>
        );
        break;
    }

    return (
      <section className="friend-request-status-body flex-container">
        <p>{message}</p>
        <FriendRequestButton {...this.props} />
      </section>
    );
  }
});
