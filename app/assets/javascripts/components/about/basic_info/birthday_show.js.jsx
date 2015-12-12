var BirthdayShow = React.createClass({
  render: function() {
    var {user, toggleEdit, ...other} = this.props;
    return (
      <div className="flex-container max-width">
        <div>Birth Date</div>
        <div className="black">{moment(user.birthday).format("MMM Do YYYY")}</div>
        <a className="edit-about" data-name="birthday" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
