var EmailShow = React.createClass({
  render: function() {
    var {user, toggleEdit, ...other} = this.props;
    return (
      <div className="flex-container max-width">
        <div>Email</div>
        <div className="black">{user.email}</div>
        <a className="edit-about" data-name="email" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
