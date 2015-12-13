var WorkShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, ...other} = this.props;

    if (!profile || !profile.work) {
      return <WorkAdd {...this.props} />;
    }

    return (
      <div className="flex-container max-width">
        <div>Work</div>
        <div className="black">{profile.work}</div>
        <a className="edit-about" data-name="work" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
