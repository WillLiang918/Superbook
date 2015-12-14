var BioShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, ...other} = this.props;

    if (!profile || !profile.bio) { return <BioAdd {...this.props} />; }

    return (
      <div className="flex-container max-width about-detail-content">
        <p className="bio">{profile.bio}</p>
        <a className="edit-about" data-name="bio" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
