var UserCover = React.createClass({
  render: function() {
    var user = this.props.user, url = "";
    if (!!user.avatar) {
      url = user.avatar.profile;
    }

    return (
      <section className="users-cover">
        <CoverPhoto />
        <ProfilePicture url={url} />
        <UserTitle user={user} />
        <UserFriendNav {...this.props} />
        <UserPageNav />
      </section>
    );
  }
});
