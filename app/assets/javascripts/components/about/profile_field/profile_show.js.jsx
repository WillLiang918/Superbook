var ProfileShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, name, ...other} = this.props;

    if (!profile || !profile[name]) {
      return <ProfileAdd {...this.props} />;
    }

    return (
      <div className="flex-container max-width">
        <div className="capitalize">{name}</div>
        <div className="black">{profile[name]}</div>
        <a className="edit-about" data-name={name} onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
