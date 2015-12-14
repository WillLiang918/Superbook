var EmailShow = React.createClass({
  render: function() {
    var {user, toggleEdit, currentUser, ...other} = this.props;
    var editClass = "edit-about";
    if (user.id !== currentUser.id) editClass += " hidden";

    return (
      <div className="flex-container max-width">
        <div>Email</div>
        <div className="black">{user.email}</div>
        <a className={editClass} data-name="email" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
