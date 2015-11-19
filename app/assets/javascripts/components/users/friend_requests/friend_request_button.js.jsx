var FriendRequestButton = React.createClass({
  render: function() {
    var buttonText, status = this.props.status;
    switch(status) {
      case "sent":
        buttonText = "Friend Request Sent";
        break;
      case "none":
        buttonText = "Add Friend";
        break;
    }


    return (
      <button className="friend-request-button">
        <strong className="add-friend" />{buttonText}
      </button>
    );
  }
});
