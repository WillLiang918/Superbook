var PhoneShow = React.createClass({
  render: function() {
    var {profile, toggleEdit, ...other} = this.props;

    if (!profile || !profile.phone) {
      return <PhoneAdd {...this.props} />;
    }

    return (
      <div className="flex-container max-width">
        <div>Phone</div>
        <div className="black">{profile.phone}</div>
        <a className="edit-about" data-name="phone" onClick={toggleEdit}>Edit</a>
      </div>
    );
  }
});
