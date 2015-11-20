var UserCover = React.createClass({
  render: function() {
    return (
      <section className="users-cover">
        <CoverPhoto />
        <ProfilePicture />
        <UserTitle user={this.props.user} />
        <UserFriendNav {...this.props} />
        <UserPageNav />
      </section>
    );
  }
});
