var Contact = React.createClass({
  render: function() {
    var {profile, user, currentUser, ...other} = this.props;
    var hidePhone = currentUser.id !== user.id && (!profile || !profile.phone);
    var hideAddress = currentUser.id !== user.id && (!profile || !profile.address);

    return (
      <FormContainer className="user-contact" title="Contact Information">
        <Email {...this.props} />
        <ProfileField name="phone" {...this.props} hide={hidePhone} />
        <ProfileField name="address" {...this.props} hide={hideAddress} />
      </FormContainer>
    );
  }
});
