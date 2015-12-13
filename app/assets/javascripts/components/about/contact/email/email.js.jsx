var Email = React.createClass({
  render: function() {
    return <AboutField name="email" form={EmailForm} show={EmailShow} {...this.props} />;
  }
});
