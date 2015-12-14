var BirthdayShow = React.createClass({
  render: function() {
    var {user, toggleEdit, currentUser, ...other} = this.props;
    var editClass = "edit-about";
    if (user.id !== currentUser.id) editClass += " hidden";

    return (
      <div className="flex-container max-width">
        <div>Birth Date</div>
        <div className="black">{moment(user.birthday).format("MMM Do YYYY")}</div>
        <a className={editClass} data-name="birthday" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
