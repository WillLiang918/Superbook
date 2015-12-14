var SexShow = React.createClass({
  render: function() {
    var {user, toggleEdit, currentUser, ...other} = this.props;
    var editClass = "edit-about";
    if (user.id !== currentUser.id) editClass += " hidden";

    return (
      <div className="flex-container max-width">
        <div>Sex</div>
        <div className="black capitalize">{user.sex}</div>
        <a className={editClass} data-name="sex" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
