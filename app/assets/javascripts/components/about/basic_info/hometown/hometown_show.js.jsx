var HometownShow  = React.createClass({
  render: function() {
    var {profile, toggleEdit, ...other} = this.props;

    if (!profile || !profile.hometown) {
      return <HometownAdd {...this.props} />;
    }

    return (
      <div className="flex-container max-width">
        <div>Hometown</div>
        <div className="black">{profile.hometown}</div>
        <a className="edit-about" data-name="hometown" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
