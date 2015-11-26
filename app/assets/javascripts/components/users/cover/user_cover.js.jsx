var UserCover = React.createClass({
  render: function() {
    var {user, pathname, cover, ...other} = this.props, url = "";
    if (!!user.avatar) {
      url = user.avatar.profile;
    }

    return (
      <section className="users-cover">
        <CoverPhoto cover={cover} />
        <ProfilePicture url={url} />
        <UserTitle user={user} />
        <UserFriendNav {...this.props} />
        <UserPageNav user={user} pathname={pathname} />
      </section>
    );
  }
});
