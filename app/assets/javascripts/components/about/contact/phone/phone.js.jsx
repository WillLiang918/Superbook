var Phone = React.createClass({
  render: function() {
    return <AboutField name="phone" form={PhoneForm} show={PhoneShow} {...this.props} />;
  }
});
