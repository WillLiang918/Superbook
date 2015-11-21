var Friend = React.createClass({
  render: function() {
    var friend = this.props.user;

    return (
      <figure className="friend">
        <a href="#"><img src="" /></a>
        <div className="friend-body flex-container">
          <a href="#">{friend.first_name + " " + friend.last_name}</a>

          <FriendStatusButton {...this.props} />
        </div>
      </figure>
    );
  }
});
