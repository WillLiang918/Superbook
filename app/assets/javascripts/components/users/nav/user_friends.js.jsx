var UserFriends = React.createClass({
  render: function() {
    var friends = this.props.friends;
    if (friends.length === 0) { return false; }

    return (
      <article className="user-friends">
        <UserSideNavHeader title={"Friends"} small={friends.length} />
        <UserFriendsThumbs friends={friends} />
      </article>
    );
  }
});
