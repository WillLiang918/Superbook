var Details = React.createClass({
  render: function() {
    var {profile, user, currentUser, nicknames, ...other} = this.props;
    var hideBio = currentUser.id !== user.id && (!profile || !profile.bio);
    var hideNicknames = currentUser.id !== user.id && (!nicknames || !nicknames.length);

    return (
      <FormContainer className="user-deatails">
        <Bio name="bio" {...this.props} hide={hideBio} />
        <Nicknames name="nicknames" {...this.props} hide={hideNicknames} />
      </FormContainer>
    );
  }
});
