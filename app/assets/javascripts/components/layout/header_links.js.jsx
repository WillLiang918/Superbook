var HeaderLinks = React.createClass({
  render: function() {
    var currentUser = this.props.currentUser;

    return (
      <ul className="nav-link-list flex-container">
        <li className="nav-link">
          <Link to={"users/" + currentUser.id}>
            <div>{currentUser.first_name}</div>
            </Link>
        </li>
        <li className="nav-link">
          <a href="#"><div>Home</div></a>
        </li>
        <li className="nav-link">
          <LogoutButton />
        </li>
      </ul>
    );
  }
});
