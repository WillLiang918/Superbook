var FriendRequestButton = React.createClass({
  render: function() {
    var buttonText, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        buttonText = "Friend Request Sent";
        break;
      case FriendConstants.NO_REQUEST:
        buttonText = "Add Friend";
        break;
    }


    return (
      <button className="friend-request-button" onClick={this.props.onClick}>
        <strong className="add-friend" />{buttonText}
      </button>
    );
  }
});
