var Contact = React.createClass({
  render: function() {
    return (
      <FormContainer className="user-contact" title="Contact Information">
        <Email {...this.props} />
        <ProfileField name="phone" {...this.props} />
      </FormContainer>
    );
  }
});
