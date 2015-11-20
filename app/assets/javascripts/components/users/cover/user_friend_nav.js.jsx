var UserFriendNav = React.createClass({
  render: function() {
    var buttonText, button, dropdown, self = false, iconClass="add-friend-gray", onClick = function() {}, status = this.props.status;
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
      case FriendConstants.FRIENDS:
        iconClass = "check-icon";
        buttonText = (
          <span className="arrow-after">Friends</span>
        );
        dropdown = (
          <HoverDropDown className="wide-drop-down">
            <span _onClick={this.props.unfriend}>Unfriend</span>
          </HoverDropDown>
        );
        break;
    }

    if (!self) {
      button = (
        <button onClick={onClick} className="hover-drop-down-container">
          <strong className={iconClass} />
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
