var FriendThumb = React.createClass({
  render: function() {
    var friend = this.props.friend;
    var url = friend.avatar.profile;

    return (
      <img className="friend-thumb" src={url} />
    );
  }
});
