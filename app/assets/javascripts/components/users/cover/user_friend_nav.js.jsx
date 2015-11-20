var UserFriendNav = React.createClass({
  render: function() {
    var buttonText, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        buttonText = "Friend Request Sent";
        break;
      case FriendConstants.REQUEST_RECEIVED:
        buttonText = "Respond to Friend Request";
        break;
      case FriendConstants.NO_REQUEST:
        buttonText = "Add Friend";
        break;
      default:
        buttonText = "Friends";
    }

    return (
      <nav className="user-friend-nav flex-container">
        <button>
          <strong className="add-friend-gray" />
          {buttonText}
        </button>
      </nav>
    );
  }
});
