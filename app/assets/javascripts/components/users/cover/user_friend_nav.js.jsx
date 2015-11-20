var UserFriendNav = React.createClass({
  render: function() {
    var buttonText, self = false, button, dropdown, onClick = function() {}, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        buttonText = "Friend Request Sent";
        dropdown = (
          <HoverDropDown className="wide-drop-down">
            <span _onClick={this.props.cancel}>Cancel Request</span>
          </HoverDropDown>
        );
        break;
      case FriendConstants.REQUEST_RECEIVED:
        buttonText = "Respond to Friend Request";
        dropdown = (
          <HoverDropDown>
            <span _onClick={this.props.accept}>Confirm</span>
            <span _onClick={this.props.delete}>Delete Request</span>
          </HoverDropDown>
        );
        break;
      case FriendConstants.NO_REQUEST:
        buttonText = "Add Friend";
        onClick = this.props.send;
        break;
      case FriendConstants.SELF:
        self = true;
        break;
      default:
        buttonText = "Friends";
    }

    if (!self) {
      button = (
        <button onClick={onClick} className="hover-drop-down-container">
          <strong className="add-friend-gray" />
          {buttonText}
          {dropdown}
        </button>
      );
    }

    return (
      <nav className="user-friend-nav flex-container">{button}</nav>
    );
  }
});
