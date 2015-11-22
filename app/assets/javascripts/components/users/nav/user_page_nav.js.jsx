var UserPageNav = React.createClass({
  render: function() {
    var userId = this.props.user.id;
    var userPath = "/users/" + userId;
    var friendPath = userPath + "/friends";
    var pathname = this.props.pathname;

    return (
      <nav className="user-page-nav flex-container">
        <Link to={userPath} className={pathname == userPath ? "active" : ""}>
          <div className="center-vertical">Timeline</div>
        </Link>

        <Link to={friendPath} className={pathname == friendPath ? "active" : ""}>
          <div className="center-vertical">Friends</div>
        </Link>
      </nav>
    );
  }
});
