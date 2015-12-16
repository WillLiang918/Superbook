var Friend = React.createClass({
  render: function() {
    var {user: friend} = this.props;
    var friendPath = "/users/" + friend.id;
    var friendImageUrl = friend.avatar.profile;

    return (
      <figure className="friend">
        <Link to={friendPath}><img src={friendImageUrl} /></Link>

        <div className="friend-body flex-container">
          <Link to={friendPath} className="flex-column">
            {friend.first_name + " " + friend.last_name}
          </Link>

          <FriendStatusButton {...this.props} />
        </div>
      </figure>
    );
  }
});
