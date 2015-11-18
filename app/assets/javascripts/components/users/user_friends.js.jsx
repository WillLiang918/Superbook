var UserFriends = React.createClass({
  render: function() {
    var friends = [];
    for (var i = 1; i < 10; i++) {
      friends.push({"id": i});
    }

    return (
      <article className="user-friends">
        <UserSideNavHeader title={"Friends"} small={"XXX"} />
        <UserFriendsThumbs friends={friends} />
      </article>
    );
  }
});
