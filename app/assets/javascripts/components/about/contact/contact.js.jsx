var Contact = React.createClass({
  render: function() {
    return (
      <FormContainer className="user-contact" title="Contact Information">
        <Email {...this.props} />
        <Phone {...this.props} />
      </FormContainer>
    );
  }
});
