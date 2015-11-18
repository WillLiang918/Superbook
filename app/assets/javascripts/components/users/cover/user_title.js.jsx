var UserTitle = React.createClass({
  render: function() {
    var user = this.props.user;

    return (
      <a href="#" className="user-name">
        <h2 className="first-name">{user.first_name}</h2>
        <h2 className="last-name">{user.last_name}</h2>
      </a>
    );
  }
});
