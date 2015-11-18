var UserFriendsThumbs = React.createClass({
  render: function() {
    var friendThumbs = this.props.friends.map(function(friend) {
      return <li key={friend.id}><FriendThumb friend={friend} /></li>;
    });

    return (
      <ul className="user-friends-thumbs flex-container-start">
        {friendThumbs}
      </ul>
    );
  }
});
