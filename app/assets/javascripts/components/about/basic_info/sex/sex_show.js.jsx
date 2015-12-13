var SexShow = React.createClass({
  render: function() {
    var {user, toggleEdit, ...other} = this.props;
    return (
      <div className="flex-container max-width">
        <div>Sex</div>
        <div className="black capitalize">{user.sex}</div>
        <a className="edit-about" data-name="sex" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
