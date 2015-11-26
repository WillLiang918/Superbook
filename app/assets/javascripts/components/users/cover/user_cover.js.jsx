var UserCover = React.createClass({
  render: function() {
    var {user, pathname, cover, status, ...other} = this.props, url = "";
    if (!!user.avatar) {
      url = user.avatar.profile;
    }

    return (
      <section className="users-cover">
        <CoverPhoto cover={cover} status={status} />
        <ProfilePicture url={url} status={status} />
        <UserTitle user={user} />
        <UserFriendNav {...this.props} />
        <UserPageNav user={user} pathname={pathname} />
      </section>
    );
  }
});
