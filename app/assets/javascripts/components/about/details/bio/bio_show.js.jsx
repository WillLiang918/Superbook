var BioShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, user, currentUser} = this.props;
    if (!profile || !profile.bio) { return <BioAdd {...this.props} />; }

    var editClass = "edit-about";
    if (currentUser.id !== user.id) { editClass += " hidden"; }


    return (
      <div className="flex-container max-width about-detail-content">
        <p className="bio black">{profile.bio}</p>
        <a className={editClass} data-name="bio" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
