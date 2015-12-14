var ProfileShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, name, user, currentUser, ...other} = this.props;

    if (!profile || !profile[name]) {
      return <ProfileAdd {...this.props} />;
    }

    var editClass = "edit-about";
    if (currentUser.id !== user.id) {
      editClass += " hidden";
    }

    return (
      <div className="flex-container max-width">
        <div className="capitalize">{name}</div>
        <div className="black">{profile[name]}</div>
        <a className={editClass} data-name={name} onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
