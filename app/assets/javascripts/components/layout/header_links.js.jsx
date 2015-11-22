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
          <a className="flex-center" href="#"><span>Home</span></a>
        </li>
        <li className="nav-link">
          <LogoutButton />
        </li>
      </ul>
    );
  }
});
