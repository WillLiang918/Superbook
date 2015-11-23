var Thumbnail = React.createClass({
  render: function() {
    var user = this.props.user;
    var avatarUrl = user.avatar.profile;
    var userUrl = "/users/" + user.id;

    return (
      <Link to={userUrl}>
        <img src={avatarUrl} className="profile-thumb" />
      </Link>
    );
  }
});
