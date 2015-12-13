var BasicInfo = React.createClass({
  render: function() {
    return (
      <FormContainer className="user-basic-info" title="Basic Information">
        <Birthday {...this.props} />
        <Sex {...this.props} />
        <ProfileField name="work" inputType="text" {...this.props} />
        <ProfileField name="hometown" inputType="text" {...this.props} />
      </FormContainer>
    );
  }
});
