var HeaderLinks = React.createClass({
  render: function() {
    return (
      <ul className="nav-link-list flex-container">
        <li className="nav-link">
          <a href="#"><div>Username</div></a>
        </li>
        <li className="nav-link">
          <a href="#"><div>Home</div></a>
        </li>
        <li className="nav-link">
          <a href="#"><div>Log Out</div></a>
        </li>
      </ul>
    );
  }
});
