var BasicInfo = React.createClass({
  render: function() {
    return (
      <FormContainer className="user-basic-info" title="Basic Information">
        <Birthday {...this.props} />
        <Sex {...this.props} />
      </FormContainer>
    );
  }
});
