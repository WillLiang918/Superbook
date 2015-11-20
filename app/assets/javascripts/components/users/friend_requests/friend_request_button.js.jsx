var FriendRequestButton = React.createClass({
  render: function() {
    var buttonText, dropdown, status = this.props.status;
    switch(status) {
      case FriendConstants.REQUEST_SENT:
        buttonText = "Friend Request Sent";
        dropdown = (
          <HoverDropDown>
            <a _onClick={this.props.cancel}>Cancel</a>
          </HoverDropDown>
        );
        break;
      case FriendConstants.NO_REQUEST:
        buttonText = "Add Friend";
        break;
    }


    return (
      <button className="friend-request-button hover-drop-down-container" onClick={this.props.onClick}>
        <strong className="add-friend" />
        {buttonText}
        {dropdown}
      </button>
    );
  }
});
