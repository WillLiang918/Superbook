var FriendStatusButton = React.createClass({
  render: function() {
    var buttonText, dropdown, onClick = function() {}, iconClass = "add-friend-gray";

    switch(this.props.status) {

      case FriendConstants.REQUEST_SENT:
        buttonText = "Friend Request Sent";
        dropdown = (
          <HoverDropDown className="wide-drop-down">
            <span _onClick={this.cancelFriendRequest}>Cancel Request</span>
          </HoverDropDown>
        );
        break;

      case FriendConstants.REQUEST_RECEIVED:
        buttonText = "Respond to Friend Request";
        dropdown = (
          <HoverDropDown>
            <span _onClick={this.acceptFriendRequest}>Confirm</span>
            <span _onClick={this.deleteFriendRequest}>Delete Request</span>
          </HoverDropDown>
        );
        break;

      case FriendConstants.NO_REQUEST:
        buttonText = "Add Friend";
        onClick = this.sendFriendRequest;
        break;

      case FriendConstants.SELF:
        return false;

      case FriendConstants.FRIENDS:
        iconClass = "check-icon";
        buttonText = (
          <span className="arrow-after">Friends</span>
        );
        dropdown = (
          <HoverDropDown className="wide-drop-down">
            <span _onClick={this.unfriend}>Unfriend</span>
          </HoverDropDown>
        );
        break;
    }

    return (
      <button onClick={onClick} className="hover-drop-down-container friend-status-button">
        <strong className={iconClass} />
        {buttonText}
        {dropdown}
      </button>
    );
  },
  sendFriendRequest: function() {
    var userId = this.props.user.id;
    ApiUtil.sendFriendRequest(userId);
  },
  cancelFriendRequest: function() {
    var userId = this.props.user.id;
    ApiUtil.cancelFriendRequest(userId);
  },
  acceptFriendRequest: function() {
    var userId = this.props.user.id;
    ApiUtil.acceptFriendRequest(userId);
  },
  deleteFriendRequest: function() {
    var userId = this.props.user.id;
    ApiUtil.deleteFriendRequest(userId);
  },
  unfriend: function() {
    var userId = this.props.user.id;
    ApiUtil.unfriend(userId);
  }
});
