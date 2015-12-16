var Details = React.createClass({
  render: function() {
    var {profile, user, currentUser, nicknames, abilities} = this.props;
    var hideBio = currentUser.id !== user.id && (!profile || !profile.bio);
    var hideNicknames = currentUser.id !== user.id && (!nicknames || !nicknames.length);
    var hideAbilities = currentUser.id !== user.id && (!abilities || !abilities.length);

    return (
      <FormContainer className="user-deatails">
        <Bio name="bio" {...this.props} hide={hideBio} />
        <Nicknames name="nicknames" {...this.props} hide={hideNicknames} />
        <Abilities name="abilities" {...this.props} hide={hideAbilities} />
      </FormContainer>
    );
  }
});
