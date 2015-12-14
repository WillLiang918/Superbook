var BasicInfo = React.createClass({
  render: function() {
    var {profile, user, currentUser, ...other} = this.props;
    var hideWork = currentUser.id !== user.id && (!profile || !profile.work);
    var hideHometown = currentUser.id !== user.id && (!profile || !profile.hometown);

    return (
      <FormContainer className="user-basic-info" title="Basic Information">
        <Birthday {...this.props} />
        <Sex {...this.props} />
        <ProfileField name="work" inputType="text" {...this.props} hide={hideWork} />
        <ProfileField name="hometown" inputType="text" {...this.props} hide={hideHometown} />
      </FormContainer>
    );
  }
});
