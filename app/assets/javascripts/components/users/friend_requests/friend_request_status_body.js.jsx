var FriendRequestStatusBody = React.createClass({
  render: function() {
    var message, status = this.props.status;
    switch(status) {
      case "sent":
        message = "Request Sent.";
        break;
      case "none":
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
