var Sex = React.createClass({
  render: function() {
    return <AboutField name="sex" form={SexForm} show={SexShow} {...this.props} />;
  }
});
