var Details = React.createClass({
  render: function() {
    return (
      <FormContainer className="user-deatails">
        <Bio name="bio" {...this.props} />
      </FormContainer>
    );
  }
});
