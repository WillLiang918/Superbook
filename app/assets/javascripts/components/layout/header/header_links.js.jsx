var HeaderLinks = React.createClass({
  render: function() {
    var currentUser = this.props.currentUser;

    return (
      <ul className="nav-link-list flex-container">
        <li className="nav-link">
          <Link to={"users/" + currentUser.id} className="flex-center">
            <img src={currentUser.avatar.profile} className="profile-preview" />
            <span>{currentUser.first_name}</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/" className="flex-center"><span>Home</span></Link>
        </li>

        <li className="flex-center">
          <HeaderIconLinks {...this.props} />
        </li>

        <li className="logout-container flex-center">
          <LogoutMenu />
        </li>
      </ul>
    );
  }
});
