var UserCover = React.createClass({
  render: function() {
    return (
      <section className="users-cover">
        <CoverPhoto />
        <ProfilePicture />
        <UserTitle />
        <UserFriendNav />
        <UserPageNav />
      </section>
    );
  }
});
